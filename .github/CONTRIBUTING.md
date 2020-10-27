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
This site is deployed on [Now] and mapped to the `primer.style` domain. With the Now CLI installed globally (and authenticated), you should be able deploy the site by running:

```
script/deploy
```

If you run into trouble, you can run the commands from that script one by one:

1. `now` to deploy the current working directory. This creates a new deployment with a unique id. Keep in mind that:

    * All pull requests are automatically deployed by the [Now GitHub app].
    * You don't have to be a member of the the Primer team to deploy this site to Now! (You just won't be able to alias your deployment to `primer.style`.)

2. `now --target production` to deploy (or alias the most recent deployment) to the production `primer.style` domain.

### Path aliases
Now's [path alias] feature allows us to serve multiple apps under a single domain (in this case, `primer.style`). As this site grows, we will split larger pages off into separate apps and manage their aliases in this repo's [now.json](./now.json) under the `routes` array.

#### Path alias tips and tricks
Because of the way that Now's path alias feature works, separate apps need to be configured to serve all of their URLs under the same path as they're aliased to on `primer.style`. In other words, an app aliased to `/alias/**` will need to serve all of its content from `/alias/` rather than `/`. For both Gatsby and Next.js, this means nesting all of your page content in `pages/<alias>/`.

[Primer React]: https://primer.style/components
[Now]: https://zeit.co/now
[Now GitHub app]: https://github.com/apps/now
[path alias]: https://zeit.co/docs/features/path-aliases
[primer.style]: https://primer.style/
[scale]: https://zeit.co/docs/getting-started/scaling
[gatsby]: https://www.gatsbyjs.org
