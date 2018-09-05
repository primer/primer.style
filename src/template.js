module.exports = ({
  html = '',
  css = '',
  scripts,
  title = 'GitHub Primer open-source projects',
  meta = [],
  links = [],
}) =>
`<!DOCTYPE html>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1' />
  <link rel='stylesheet' href='https://unpkg.com/primer/build/build.css' />
  <meta name='viewport' content='width=device-width,initial-scale=1'>
  <title>${title}</title>
  ${css}
</head>
<div id=root>${html}</div>
${scripts}
`
