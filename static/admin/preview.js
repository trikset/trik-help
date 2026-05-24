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

  function normalizeBody(input) {
    var text = input || '';
    text = text.replace(/^import\s+.*?;\s*$/gm, '');
    text = text.replace(/^export\s+.*?;\s*$/gm, '');
    text = text.replace(/^\s*\{\/\*.*?\*\/\}\s*$/gm, '');
    text = text.replace(/&#123;/g, '{').replace(/&#125;/g, '}').replace(/&#x20;/g, ' ');
    text = text.replace(/<div\s+align=["']center["']>([\s\S]*?)<\/div>/gi, '<div style="text-align:center">$1</div>');

    text = text.replace(/<Tabs[^>]*>([\s\S]*?)<\/Tabs>/gi, function (_, inner) {
      return '<div class="trik-preview-tabs">' + inner + '</div>';
    });
    text = text.replace(/<TabItem[^>]*label=\{?["']([^"'}]+)["']\}?[^>]*>([\s\S]*?)<\/TabItem>/gi, function (_, label, inner) {
      return '<div class="trik-preview-tab-label">' + label + '</div><div class="trik-preview-tab-body">' + inner + '</div>';
    });
    text = text.replace(/<TabItem[^>]*value=\{?["']([^"'}]+)["']\}?[^>]*>([\s\S]*?)<\/TabItem>/gi, function (_, label, inner) {
      return '<div class="trik-preview-tab-label">' + label + '</div><div class="trik-preview-tab-body">' + inner + '</div>';
    });

    text = text.replace(/:::(tip|note|info)([^\n]*)\n([\s\S]*?)\n:::/g, '<div class="trik-preview-hint">$3</div>');
    text = text.replace(/:::(warning|caution)([^\n]*)\n([\s\S]*?)\n:::/g, '<div class="trik-preview-hint trik-preview-warning">$3</div>');
    text = text.replace(/:::(danger)([^\n]*)\n([\s\S]*?)\n:::/g, '<div class="trik-preview-hint trik-preview-danger">$3</div>');
    return text.trim();
  }

  function absolutizeAssets(html) {
    return html.replace(/(src|href)="\/gitbook\/assets\//g, '$1="/gitbook/assets/');
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

  function makePreview() {
    var CMS = window.CMS;
    var React = window.React;
    if (!CMS || !React || !window.marked) return;

    registerHtmlImageEditorComponent(CMS);

    var h = React.createElement;

    function DocsPreview(props) {
      var entry = props.entry;
      var title = entry.getIn(['data', 'title']) || '';
      var body = entry.getIn(['data', 'body']) || '';
      var md = normalizeBody(body);
      var html = window.marked.parse(md, { gfm: true, breaks: false, mangle: false, headerIds: true });
      html = absolutizeAssets(html);
      return h('main', { className: 'trik-preview-page' },
        title ? h('h1', null, title) : null,
        !md ? h('p', { className: 'trik-preview-muted' }, 'Пока нет содержимого для предпросмотра.') : null,
        h('div', { dangerouslySetInnerHTML: { __html: html } })
      );
    }

    var docCollections = [
      'docs_intro', 'docs_ev3', 'docs_feedback', 'docs_gamepad', 'docs_integrations',
      'docs_nxt', 'docs_pioneer', 'docs_studio', 'docs_trik', 'docs_trik_studio_junior'
    ];
    CMS.registerPreviewStyle('/admin/preview.css');
    docCollections.forEach(function (name) {
      CMS.registerPreviewTemplate(name, DocsPreview);
    });
  }

  loadScript('https://unpkg.com/marked@12.0.2/marked.min.js')
    .then(function () { setTimeout(makePreview, 0); })
    .catch(function () { setTimeout(makePreview, 0); });
})();
