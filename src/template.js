const icons = require('./icons')

module.exports = ({html = '', css = '', scripts, title}) =>
  `<!DOCTYPE html>
<head>
  <title>${title}</title>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1' />

  ${icons.join('\n  ')}

  <meta name="keywords" content="Design System" />
  <meta property="og:article:author" content="GitHub Design Systems team" />
  <meta property="og:title" content="Primer" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://primer.style" />
  <meta property="og:description" content="The design system that powers GitHub" />
  <meta property="og:image" content="https://user-images.githubusercontent.com/586552/47662657-bb011d80-db71-11e8-967e-6d7af28d25d4.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:site" content="@githubprimer" />

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126681523-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-126681523-1');
  </script>

  <link rel='stylesheet' href='https://unpkg.com/@primer/css/dist/layout.css' />
  ${css}
</head>
<body>
  <div id="root" class="overflow-hidden">${html}</div>
  ${scripts}
</body>`
