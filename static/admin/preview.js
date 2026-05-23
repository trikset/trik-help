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

  function makePreview() {
    var CMS = window.CMS;
    var React = window.React;
    if (!CMS || !React || !window.marked) return;

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
