# Contributing
Hi, and thanks for contributing to `primer.style`!


## Tools
This site is built with [Primer React components][components] and [x0].


## Development
To start up your local dev environment, run:

1. `npm install` to install all the Node dependencies
2. `npm run dev` to start the dev server
3. `npm run build` to build the static site
4. `npm start` to serve the static site


## Deployment
This site is deployed on [Now] and mapped to the `primer.style` domain. With the Now CLI installed globally (and authenticated), you should be able deploy the site by running:

```
script/deploy
```

If you run into trouble, you can run the commands from that script one by one:

1. `now` to deploy the current working directory. This creates a new deployment with a unique id. Keep in mind that:

    * All pull requests are automatically deployed by the [Now GitHub app].
    * You don't have to be a member of the the Primer team to deploy this site to Now! (You just won't be able to alias your deployment to `primer.style`.)

2. `now alias primer-style.now.sh` to alias the most recent deployment to our "production" `now.sh` subdomain.

3. `now scale primer-style.now.sh 1` to [scale] the deployment to a minimum of one instance at all times.

4. `now alias primer.style -r rules.json` to alias the most recent deployment with [path aliases](#path-aliases) configured in `rules.json`. (The last rule in that file sends any unmatched requests to `primer-style.now.sh`.)

### Path aliases
Now's [path alias] feature allows us to serve multiple apps under a single domain (in this case, `primer.style`). As this site grows, we will split larger pages off into separate apps and manage their aliases in this repo's `rules.json`, then re-run `now alias -r rules.json` whenever those mappings change.

#### Path alias tips and tricks
Because of the way that Now's path alias feature works, separate apps need to be configured to serve all of their URLs under the same path as they're aliased to here. In other words, an app aliased to `/alias/**` will need to serve all of its content from `/alias/` rather than `/`. For Next.js apps, this means nesting all of your page content in `pages/<alias>/`. Serving static assets is trickier; you can see how we did it for [the components site][components] in [this pull request](https://github.com/primer/primer-react/pull/238).

[components]: https://primer.style/components/
[Now]: https://zeit.co/now
[Now GitHub app]: https://github.com/apps/now
[path alias]: https://zeit.co/docs/features/path-aliases
[primer.style]: https://primer.style/
[scale]: https://zeit.co/docs/getting-started/scaling
[x0]: https://github.com/c8r/x0
