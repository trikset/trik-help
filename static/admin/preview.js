(function () {
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function normalizeAdmonitions(text) {
    return text.replace(/^:{3,4}(tip|note|info|warning|caution|danger)([^\n]*)\n([\s\S]*?)\n:{3,4}\s*$/gm, function (_, type, label, body) {
      var cls = 'trik-preview-admonition trik-preview-admonition-' + (type === 'caution' ? 'warning' : type);
      var defaultTitle = {
        tip: 'Подсказка', note: 'Примечание', info: 'Информация',
        warning: 'Внимание', caution: 'Внимание', danger: 'Важно'
      }[type] || 'Примечание';
      var title = String(label || '').trim() || defaultTitle;
      return '<div class="' + cls + '"><div class="trik-preview-admonition-title">' + title + '</div>\n\n' + body + '\n\n</div>';
    });
  }

  function normalizeTabs(text) {
    text = text.replace(/<Tabs[^>]*>([\s\S]*?)<\/Tabs>/gi, function (_, inner) {
      var labels = [];
      var panels = [];
      inner.replace(/<TabItem\b([^>]*)>([\s\S]*?)<\/TabItem>/gi, function (_m, attrs, content) {
        var labelMatch = attrs.match(/\blabel=\{?["']([^"'}]+)["']\}?/i) || attrs.match(/\bvalue=\{?["']([^"'}]+)["']\}?/i);
        labels.push(labelMatch ? labelMatch[1] : ('Вкладка ' + (labels.length + 1)));
        panels.push(content.trim());
        return '';
      });
      if (!panels.length) return inner;
      var tabs = labels.map(function (label, i) {
        return '<span class="trik-preview-tab' + (i === 0 ? ' trik-preview-tab-active' : '') + '">' + label + '</span>';
      }).join('');
      var bodies = panels.map(function (panel, i) {
        return '<div class="trik-preview-tab-panel' + (i === 0 ? ' trik-preview-tab-panel-active' : '') + '">\n\n' + panel + '\n\n</div>';
      }).join('\n');
      return '<div class="trik-preview-tabs"><div class="trik-preview-tab-list">' + tabs + '</div>' + bodies + '</div>';
    });
    return text;
  }



  function decodeEntities(text) {
    return String(text || '')
      .replace(/&#123;/g, '{')
      .replace(/&#125;/g, '}')
      .replace(/&#x20;/g, ' ')
      .replace(/&quot;/g, '"')
      .replace(/&#34;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&');
  }

  function stripYamlFrontmatter(text) {
    return String(text || '').replace(/^---\n[\s\S]*?\n---\n?/, '');
  }

  function stripMdxImportsExports(text) {
    return String(text || '')
      .replace(/^\s*import\s+.*?;\s*$/gm, '')
      .replace(/^\s*export\s+.*?;\s*$/gm, '');
  }

  function stripMdxComments(text) {
    return String(text || '').replace(/^\s*\{\/\*.*?\*\/\}\s*$/gm, '');
  }

  function stripHeadingAnchors(text) {
    return String(text || '')
      .replace(/^\s*\{#[^}]+\}\s*$/gm, '')
      .replace(/^(#{1,6}\s+.*?)\s+\{#[^}]+\}\s*$/gm, '$1')
      .replace(/^#{6}\s*\{#[^}]+\}\s*$/gm, '');
  }

  function normalizeImages(text) {
    text = String(text || '').replace(/&#x20;/g, ' ');
    text = text.replace(/<div\s+align=["']center["']>([\s\S]*?)<\/div>/gi, function (_, inner) {
      return '<div class="trik-preview-center">' + inner.replace(/<img\b[^>]*>/gi, function (tag) {
        var data = parseImgTag(tag);
        return data ? markdownImage(data) : tag;
      }) + '</div>';
    });
    text = text.replace(/<img\b[^>]*>/gi, function (tag) {
      var data = parseImgTag(tag);
      return data ? markdownImage(data) : tag;
    });
    return text;
  }

  function ensureBlockSeparation(text) {
    text = String(text || '');
    text = text.replace(/^(#{1,6}\s+[^\n]+)\n(?=\S)/gm, '$1\n\n');
    text = text.replace(/^(#{1,6}\s+[^\n]+)\s{2,}([^\n]+)$/gm, '$1\n\n$2');
    return text;
  }

  function normalizeBody(input) {
    var text = String(input || '');
    text = text.replace(/\uFEFF/g, '');
    text = text.replace(/\r\n?/g, '\n');
    text = stripYamlFrontmatter(text);
    text = stripMdxImportsExports(text);
    text = stripMdxComments(text);
    text = decodeEntities(text);
    text = stripHeadingAnchors(text);
    text = normalizeImages(text);
    text = normalizeTabs(text);
    text = normalizeAdmonitions(text);
    text = ensureBlockSeparation(text);
    text = text.replace(/\n{3,}/g, '\n\n');
    return text.trim();
  }

  function absolutizeAssets(html) {
    return html.replace(/(src|href)="\/gitbook\/assets\//g, '$1="/gitbook/assets/');
  }

  function postProcessHtml(html) {
    html = absolutizeAssets(html);
    html = html.replace(/<a href="([^"]+\.(?:png|jpe?g|gif|webp|svg)(?:\?[^"]*)?)">([^<]*)<\/a>/gi, function (_, href, label) {
      return '<img src="' + href + '" alt="' + String(label || '').replace(/"/g, '&quot;') + '" />';
    });
    html = html.replace(/<p>\s*(<img\b[^>]*>)\s*<\/p>/gi, '<p class="trik-preview-image-block">$1</p>');
    html = html.replace(/<p>\s*(<img\b[^>]*data-size=["']line["'][^>]*>)\s*/gi, '<p>$1 ');
    return html;
  }

  function decodeAttr(value) {
    return String(value || '')
      .replace(/&quot;/g, '"')
      .replace(/&#34;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&');
  }

  function parseImgTag(block) {
    var text = String(block || '').trim();
    var img = text.match(/<img\b[^>]*>/i);
    if (!img) return null;
    var tag = img[0];
    var src = tag.match(/\bsrc=["']([^"']+)["']/i);
    if (!src) return null;
    var alt = tag.match(/\balt=["']([^"']*)["']/i);
    var title = tag.match(/\btitle=["']([^"']*)["']/i);
    return {
      src: decodeAttr(src[1]),
      alt: decodeAttr(alt ? alt[1] : ''),
      title: decodeAttr(title ? title[1] : '')
    };
  }

  function markdownImage(data) {
    var alt = String((data && data.alt) || '').replace(/\]/g, '\\]');
    var src = String((data && data.src) || '').replace(/\)/g, '\\)');
    var title = data && data.title ? ' "' + String(data.title).replace(/"/g, '\\"') + '"' : '';
    return '![' + alt + '](' + src + title + ')';
  }

  function registerHtmlImageEditorComponent(CMS) {
    if (registerHtmlImageEditorComponent.done) return;
    registerHtmlImageEditorComponent.done = true;
    CMS.registerEditorComponent({
      id: 'trik-html-image',
      label: 'Картинка из HTML-тега',
      fields: [
        { name: 'src', label: 'Адрес картинки', widget: 'string' },
        { name: 'alt', label: 'Описание', widget: 'string', required: false },
        { name: 'title', label: 'Подпись', widget: 'string', required: false }
      ],
      pattern: /^(?:<div\s+align=["']center["']>\s*)?<img\b[^>]*\bsrc=["'][^"']+["'][^>]*\/?>(?:\s*<\/div>)?$/i,
      fromBlock: function (block) {
        return parseImgTag(block) || { src: '', alt: '', title: '' };
      },
      toBlock: markdownImage,
      toPreview: function (data) {
        var alt = String((data && data.alt) || '').replace(/"/g, '&quot;');
        var src = String((data && data.src) || '').replace(/"/g, '&quot;');
        var title = data && data.title ? ' title="' + String(data.title).replace(/"/g, '&quot;') + '"' : '';
        return '<img src="' + src + '" alt="' + alt + '"' + title + ' />';
      }
    });
  }

  function renderMarkdownHtml(value) {
    var md = normalizeBody(fieldToString(value || ''));
    var html = window.marked.parse(md, { gfm: true, breaks: false, mangle: false, headerIds: true });
    return postProcessHtml(html);
  }

  function configureMarked() {
    if (!window.marked || !window.marked.use) return;
    window.marked.use({
      renderer: {
        image: function (token) {
          var href = typeof token === 'string' ? token : token.href;
          var title = typeof token === 'string' ? '' : token.title;
          var text = typeof token === 'string' ? '' : token.text;
          var attrs = ' src="' + String(href || '').replace(/"/g, '&quot;') + '" alt="' + String(text || '').replace(/"/g, '&quot;') + '"';
          if (title) attrs += ' title="' + String(title).replace(/"/g, '&quot;') + '"';
          return '<img' + attrs + ' />';
        }
      }
    });
  }



  function fieldToString(value) {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    if (value && typeof value.toJS === 'function') value = value.toJS();
    if (Array.isArray(value)) return value.join('\n');
    return String(value);
  }

  function renderPreviewError(h, error) {
    var message = error && (error.stack || error.message || String(error));
    return h('main', { className: 'trik-preview-page' },
      h('div', { className: 'trik-preview-error' },
        h('strong', null, 'Ошибка Decap preview'),
        h('pre', null, message || 'Unknown preview error')
      )
    );
  }

  function makePreview() {
    var CMS = window.CMS;
    var h = window.h || (window.React && window.React.createElement);
    if (!CMS || !window.marked) return;
    if (!h && window.React && window.React.createElement) h = window.React.createElement;
    if (!h) return;

    configureMarked();
    registerHtmlImageEditorComponent(CMS);

    window.__TRIK_PREVIEW_LOADED = 'yes';

    function DocsPreview(props) {
      try {
        var entry = props.entry;
        var title = fieldToString(entry.getIn(['data', 'title']) || '');
        var body = fieldToString(entry.getIn(['data', 'body']) || '');
        var md = normalizeBody(body);
        var html = renderMarkdownHtml(md);
        return h('main', { className: 'trik-preview-page' },
          h('div', { className: 'trik-preview-note' }, 'Приближённый предпросмотр Decap. Точный вид страницы — по ссылке «Предпросмотр» после сохранения.'),
          title ? h('h1', null, title) : null,
          !md ? h('p', { className: 'trik-preview-muted' }, 'Пока нет содержимого для предпросмотра.') : null,
          h('div', { className: 'trik-preview-markdown', dangerouslySetInnerHTML: { __html: html } })
        );
      } catch (error) {
        console.error('TRIK Decap preview error', error);
        return renderPreviewError(h, error);
      }
    }

    var docCollections = [
      'docs_intro', 'docs_ev3', 'docs_feedback', 'docs_gamepad', 'docs_integrations',
      'docs_nxt', 'docs_pioneer', 'docs_studio', 'docs_trik', 'docs_trik_studio_junior'
    ];
    CMS.registerPreviewStyle('/admin/preview.css?v=20260524T2018Z');
    docCollections.forEach(function (name) {
      CMS.registerPreviewTemplate(name, DocsPreview);
    });
  }

  var previewRegistered = false;
  function tryMakePreview(attempt) {
    attempt = attempt || 0;
    if (previewRegistered) return;
    if (window.CMS && window.marked) {
      makePreview();
      previewRegistered = true;
      return;
    }
    if (attempt < 120) setTimeout(function () { tryMakePreview(attempt + 1); }, 250);
  }

  loadScript('https://unpkg.com/marked@12.0.2/marked.min.js')
    .then(function () { tryMakePreview(0); })
    .catch(function () { tryMakePreview(0); });
})();
