# Contributing
Hi, and thanks for contributing to `primer.style`!


## Tools
This site is built with [Primer React components][components] and [x0].


## Development
To start up your local dev environment, run:

1. `npm install` to install all the Node dependencies
2. `npm start` to start the server


## Deployment
This site is deployed on [Now] and mapped to the `primer.style` domain. With the Now CLI installed globally (and authenticated), you should be able deploy the site by running three commands:

1. `now` to deploy the current working directory. This creates a new deployment with a unique id. Keep in mind that:

    * All pull requests are automatically deployed by the [Now GitHub app].
    * You don't have to be a member of the the Primer team to deploy this site to Now! (You just won't be able to alias your deployment to `primer.style`.)

2. `now alias` to alias the most recent deployment to `primer.style`.

3. `now alias -r rules.json` to update any [path aliases](#path-aliases) configured in `rules.json`.

Or just run `script/deploy`, which runs these commands in the same order.

### Path aliases
Now's [path alias] feature allows us to serve multiple apps under a single domain (in this case, `primer.style`). As this site grows, we will split larger pages off into separate apps and manage their aliases in this repo's `rules.json`, then re-run `now alias -r rules.json` whenever those mappings change.

#### Path alias tips and tricks
Because of the way that Now's path alias feature works, separate apps need to be configured to serve all of their URLs under the same path as they're aliased to here. In other words, an app aliased to `/alias/**` will need to serve all of its content from `/alias/` rather than `/`. For Next.js apps, this means placing all of your content in `pages/<alias>/` so that they'll be served from `/<alias>/`. Serving static assets is trickier; you can see how we did it for [the components site][components] in [this pull request](https://github.com/primer/primer-react/pull/238).

[Now]: https://zeit.co/now
[Now GitHub app]: https://github.com/apps/now
[components]: https://primer.style/components/
[path alias]: https://zeit.co/docs/features/path-aliases
[x0]: https://github.com/c8r/x0
