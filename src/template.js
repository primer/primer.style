module.exports = ({html = '', css = '', scripts, title = 'Primer open-source projects', meta = [], links = []}) =>
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
  <link rel='stylesheet' href='https://unpkg.com/primer/build/build.css' />
  <link rel="apple-touch-icon" href="https://user-images.githubusercontent.com/334891/45369221-63075b00-b5b3-11e8-8ac7-7e588fe4c905.png">
  <link rel="icon" href="https://user-images.githubusercontent.com/334891/45369187-51be4e80-b5b3-11e8-8066-b06025239a79.png">

  <title>${title}</title>
  <meta name="description" content="The design system that powers GitHub">
  <meta name="keywords" content="Design System">
  <meta name="author" content="GitHub Design Systems team">

  <meta name="og:title" content="Primer">
  <meta name="og:description" content="The design system that powers GitHub">
  <meta name="og:image" content="https://user-images.githubusercontent.com/334891/45336457-b47efe00-b551-11e8-9644-398f29eceb92.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@githubprimer">
  ${css}
</head>
<body>
  <div id="root" class="overflow-hidden">${html}</div>
  ${scripts}
</body>
`
