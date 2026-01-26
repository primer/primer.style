const fs = require('fs')
const path = require('path')

function validator(input) {
  if (!input || typeof input !== 'object') {
    return {valid: false, error: 'Input must be an object'}
  }

  if (!Array.isArray(input.redirects) || !Array.isArray(input.rewrites)) {
    return {valid: false, error: "Input must have 'redirects' and 'rewrites' arrays"}
  }

  for (const redirect of input.redirects) {
    if (
      typeof redirect !== 'object' ||
      typeof redirect.name !== 'string' ||
      typeof redirect.match !== 'string' ||
      typeof redirect.destination !== 'string'
    ) {
      const invalidKey =
        Object.keys(redirect).find(
          (key) => typeof redirect[key] !== 'string' || (key !== 'name' && key !== 'match' && key !== 'destination')
        ) || ''
      return {valid: false, error: `'${invalidKey}' redirect has invalid value `}
    }

    try {
      new RegExp(redirect.match)
    } catch (error) {
      return {valid: false, error: `Redirect has invalid regex in 'match' property`}
    }
  }

  for (const rewrite of input.rewrites) {
    if (
      typeof rewrite !== 'object' ||
      typeof rewrite.name !== 'string' ||
      typeof rewrite.match !== 'string' ||
      typeof rewrite.destination !== 'string'
    ) {
      const invalidKey =
        Object.keys(rewrite).find(
          (key) => typeof rewrite[key] !== 'string' || (key !== 'name' && key !== 'match' && key !== 'destination')
        ) || ''
      return {valid: false, error: `'${invalidKey}' rewrite has an invalid value `}
    }

    try {
      new RegExp(rewrite.match)
    } catch (error) {
      return {valid: false, error: `Rewrite has invalid regex in 'match' property`}
    }
  }

  return {valid: true}
}

function buildRedirects() {
  const inputFile = path.join(__dirname, '../redirects.json')
  const outputFile = path.join(__dirname, '../web.config')

  const input = JSON.parse(fs.readFileSync(inputFile))

  const {valid, error} = validator(input)

  if (!valid) {
    throw new Error(`Invalid redirects.json file. ${error}`)
  }

  console.info(`redirects.json was validated successfully`)
  console.info('...')

  const redirects = input.redirects
    .map(
      ({name, match, destination}) => `<rule name="${name}" stopProcessing="true">
          <match url="${match}" />
          <action type="Redirect" redirectType="Permanent" url="${destination}" />
        </rule>
        `
    )
    .join('')

  const rewrites = input.rewrites
    .map(
      ({name, match, destination}) => `<rule name="${name}" stopProcessing="true">
          <match url="${match}" ignoreCase="true" />
          <conditions>
            <add input="{HTTP_HOST}" pattern="^(?:www.)?(.*)$" />
          </conditions>
          <action type="Rewrite" url="${destination}" />
          <serverVariables>
            <set name="HTTP_X_UNPROXIED_URL" value="${destination}" />
            <set name="HTTP_X_ORIGINAL_HOST" value="{HTTP_HOST}" />
          </serverVariables>
        </rule>
        `
    )
    .join('')

  const config = `<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <mimeMap fileExtension=".webmanifest" mimeType="application/manifest+json" />
      <remove fileExtension=".woff2" />
      <mimeMap fileExtension=".woff2" mimeType="font/woff2" />
    </staticContent>
    <httpErrors errorMode="Custom" existingResponse="Auto" defaultResponseMode="ExecuteURL" >
      <remove statusCode="404"/>
      <error statusCode="404" responseMode="ExecuteURL" path="/404/index.html" />
    </httpErrors>
    <rewrite>
      <rules>
        <!--BEGIN SSL-->
        <rule name="ForceSSL" stopProcessing="true">
          <match url="(.*)" />
          <conditions>
            <add input="{HTTPS}" pattern="^OFF$" ignoreCase="true" />
          </conditions>
          <action type="Redirect" url="https://{C:2}/{R:1}" redirectType="Permanent" />
        </rule>
        <!--END SSL-->
        <!--BEGIN Trailing slash enforcement-->
        <rule name="Add trailing slash" stopProcessing="true">
          <match url="(.*[^/])$" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            <add input="{REQUEST_FILENAME}" pattern="(.*?)\\.[a-zA-Z]{1,4}$" negate="true" />
            <add input="{URL}" negate="true" pattern="\\.woff2$" />
            <add input="{URL}" negate="true" pattern="\\.webmanifest$" />
          </conditions>
          <action type="Redirect" redirectType="Temporary" url="{R:1}/" />
        </rule>
        <!--END Trailing slash enforcement-->
        <!--BEGIN Bracket-in-URL proxy-->
        <!-- The domain should match the catch-all route defined in redirects.json -->
        <rule name="Bracket-in-URL proxy" stopProcessing="true">
          <match url="^(.*)\\[([^\\]]+)\\](.*)$" ignoreCase="true" />
          <conditions>
            <add input="{HTTP_HOST}" pattern="^(?:www.)?(.*)$" />
          </conditions>
          <action type="Rewrite" url="https://primer-docs-preview.github.com/{R:1}%5B{R:2}%5D{R:3}" />
          <serverVariables>
            <set name="HTTP_X_UNPROXIED_URL" value="https://primer-docs-preview.github.com/{R:1}%5B{R:2}%5D{R:3}" />
            <set name="HTTP_X_ORIGINAL_HOST" value="{HTTP_HOST}" />
          </serverVariables>
        </rule>
        <!--END Bracket-in-URL proxy -->
        <!--BEGIN 301 redirects. Goes before URL rewrites -->
        ${redirects}
        <!--END 301 redirects -->
        ${rewrites}
      </rules>
      <outboundRules>
        <preConditions>
          <preCondition name="CheckContentType">
            <add input="{RESPONSE_CONTENT_TYPE}" pattern="^(text/html|text/plain|text/xml|application/rss\\+xml)" />
          </preCondition>
        </preConditions>
      </outboundRules>
    </rewrite>
  </system.webServer>
</configuration>`

  fs.writeFileSync(outputFile, config)
  console.info(`Redirects built successfully and written to ${outputFile}`)
}

try {
  console.info('Building redirects...')
  console.info('...')
  buildRedirects()
} catch (error) {
  console.error(error)
}
