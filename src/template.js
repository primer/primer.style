module.exports = ({html = '', css = '', scripts, title}) =>
  `<!DOCTYPE html>
<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126681523-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-126681523-1');
  </script>

  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1' />
  <link rel='stylesheet' href='https://unpkg.com/primer-layout/build/build.css' />
  <!-- Favicons -->
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="apple-touch-icon" href="touch-icon-iphone.png">
  <link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad.png">
  <link rel="apple-touch-icon" sizes="167x167" href="touch-icon-ipad-retina.png">
  <link rel="apple-touch-icon" sizes="180x180" href="touch-icon-iphone-retina.png">
  <link rel="icon" sizes="192x192" href="/android-icon.png">
  <meta name="msapplication-square310x310logo" content="microsoft-icon.png">
  <title>${title}</title>
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
  ${css}
</head>
<body>
  <div id="root" class="overflow-hidden">${html}</div>
  ${scripts}
</body>`
