# Contributing

Hi, and thanks for contributing to `primer.style`!

## Tools

This site is built with [Gatsby] and [Primer React].

## Development

To start up your local dev environment, run:

1. `npm install` to install all the Node dependencies
2. `npm run dev` to start the dev server
3. `npm run build` to build the static site
4. `npm start` to serve the static site

## Deployment

This site is deployed to Microsoft App Service on Azure and mapped to the `primer.style` domain.

There are three ways to deploy this site:

| Syntax     | Trigger                                    |
| ---------- | ------------------------------------------ |
| Production | merge to `main` branch                     |
| Staging    | merge to `staging` branch                  |
| Preview    | pull request from `any` branch into `main` |

### Path rewriting

Reverse-proxy URL rewriting allows us to serve multiple apps under a single domain (in this case, `primer.style`). As this site grows, we will split larger pages off into separate apps and manage their aliases in this repo's [web.config](./web.config). We recommend deploying these separate apps to GitHub Pages.

### Adding new apps to primer.style routing

The following steps describe how to reverse-proxy an externally-hosted app as a new page route to primer.style. This example assumes that your app will be served from `primer.style/your-app-name`.

1. Deploy your app to GitHub Pages, or another hosting provider so that it is accessible on a unique origin URL. E.g. `https://primer.github.io/your-app-name`
2. Ensure that your app is deploying to a subfolder that corresponds to the one you would like to use on primer.style. E.g. Deploy to `/your-app-name/`, and not to `/`.
3. Add a new entry to `web.config`:

   ```xml
   <rule name="Your app proxy" stopProcessing="true">
   <match url="^your-app-name/(.*)" ignoreCase="true" />
   <conditions>
       <add input="{HTTP_HOST}" pattern="^(?:www.)?(.*)$" />
   </conditions>
   <action type="Rewrite" url="https://primer.github.io/your-app-name/{R:1}" />
   <serverVariables>
       <set name="HTTP_X_UNPROXIED_URL" value="https://primer.github.io/your-app-name/{R:1}" />
       <set name="HTTP_X_ORIGINAL_ACCEPT_ENCODING" value="{HTTP_ACCEPT_ENCODING}" />
       <set name="HTTP_X_ORIGINAL_HOST" value="{HTTP_HOST}" />
       <set name="HTTP_ACCEPT_ENCODING" value="" />
   </serverVariables>
   </rule>
   ```

4. Deploy the changes to the `staging` environment on Azure to verify the rewrite works. This can be done by merging your changes to the `staging` branch. This will deploy to [https://primerstyle-staging.azurewebsites.net/your-app-name](https://primerstyle-staging.azurewebsites.net/your-app-name>)
5. Deploy the changes to the `production` environment on Azure by merging your changes into the `main` branch. This will deploy to [https://primer.style/your-app-name](https://primer.style/your-app-name)

#### Path alias tips and tricks

Because of the way that GitHub Pages deploys websites to a subfolder named after the repository, separate apps need to be configured to serve all of their URLs under the same path as they're aliased to on `primer.style`. In other words, an app aliased to `/alias/**` will need to serve all of its content from `/alias/` rather than `/`. For both Gatsby and Next.js, this means nesting all of your page content in `pages/<alias>/`.

[azure]: https://portal.azure.com
[primer.style]: https://primer.style
[gatsby]: https://www.gatsbyjs.org
