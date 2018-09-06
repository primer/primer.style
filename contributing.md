# Contributing
Hi, thanks for contributing to `primer.style`!


## Tools
This site is made with [something] and [something else].


## Development
To start up your local dev environment, run:

1. `npm install` to install all the Node dependencies
2. `npm run dev` to start the development server


## Deployment
This site is deployed on [Now] and mapped to the `primer.style` domain. With the Now CLI installed globally (and authenticated), you should be able deploy the site by running three commands:

1. `now` to deploy the current working directory. This creates a new deployment with a unique id.
2. `now alias` to alias the new deployment to `primer.style` (or whatever is listed in the `alias` field of `now.json`).
3. `now alias -r rules.json` to update any [path aliases](#path-aliases) configured in `rules.json`.

Or just run `script/deploy`, which runs these commands in the same order.

### Path aliases
Now's [path alias] feature allows us to serve multiple apps under a single domain (in this case, `primer.style`). As this site grows, we will split larger pages off into separate apps and manage their aliases in this repo's `rules.json`, then re-run `now alias -r rules.json` whenever those mappings change.

**Note**: Because of the way that Now's path alias feature works, separate apps need to be configured to serve all of their URLs under the same path as they're aliased to here. In other words, an app aliased to `/components/**` will need to serve all of its content from `/components/` rather than `/`. For Next.js apps, that means placing all of your content in `pages/components/` and setting the `assetPrefix` .

[Now]: https://zeit.co/now
[path alias]: https://zeit.co/docs/features/path-aliases
