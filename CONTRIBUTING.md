# Contributing to primer.style

## Development

1. Get [Yarn](https://yarnpkg.com).

   ```sh
   npm i -g yarn@latest
   ```

   **Why Yarn?** We use [selective resolution
   overrides](https://yarnpkg.com/lang/en/docs/selective-version-resolutions/)
   to work around React version discrepancies in several of our dependencies.

1. Install dependencies:

   ```sh
   yarn
   ```

1. Run the development server:

   ```sh
   yarn start
   # npm works, too!
   npm start
   ```

## Redirects

When adding redirects to the [`redirects.json`](./redirects.json) file, it's important to follow the correct schema format to ensure that the redirects (and rewrites) work as intended.

Each redirect should be added as an object with three required properties: `name`, `match`, and `destination`.

- The `name` property should be a descriptive name for the redirect
- The `match` property should be a regular expression that matches the URL pattern to be redirected.
- The `destination` property should be the URL to which the matched pattern should be redirected.

It's important to test the redirects in our `staging` environment prior to a production deployment to ensure that they work correctly and do not cause any unintended downtime.

Please refer to the following diagram for more details around deployment:

![Image showing a flow diagram, asking the reader whether they have previously tested in a staging environment. If not they should merge changes to the staging branch first, before merging to main](https://user-images.githubusercontent.com/13340707/227264916-85df29da-735d-43d0-baa7-5e3c0e8b6b6f.png)
