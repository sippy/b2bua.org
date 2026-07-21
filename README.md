# B2BUA.org

The source for the B2BUA.org open-source real-time communications project
directory.

## Local development

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

## GitHub Pages

The site is exported as static HTML and deployed by
`.github/workflows/pages.yml` whenever `master` changes. Pull requests run
the same production build without deploying.

The existing GitHub Pages custom domain remains `www.b2bua.org`.

## Production build

```sh
npm run build
```

The generated site is written to `out/`.
