# For Vue Demo

Useing options API mainly,included Validation,sanity test(for unit test,e2e test,snapshot Test),pinia,localization,routing,local and global directive.<br />
And connect to firebase service as database for Authentication and uploading files.<br />
Using vite-plugin-pwa for PWA practicing(included service worker,cache,workbox for offline service),and enable firebase persistence for offline upload error handling also.


# music

This template should help get you started developing with Vue 3 in Vite.

The Demo Site: [musicShareWeb](https://music-example-ruby.vercel.app/)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
