# Static Site Starter Project

A custom built starter project geared towards fast development with webpack and sass, and outputting optimized UI assets for production.

## Tech Stack
* Webpack 3 - Babel, ESLint, JSON
* SASS (node sass)
* Node/NPM (or Yarn)

## Quick start
```
npm install
npm start
```

## Features
- [Node package manager (NPM)](https://www.npmjs.com) handling all package dependencies.
- [WebpackJS](https://webpack.js.org) module bundling for JavaScript.
- [BabelJS](https://babeljs.io) to transpile the JavaScript.
- [ESLint](https://eslint.org) linting JavaScript against AirBnb standards.
- [SCSS](https://sass-lang.com) CSS Preprocessor.

The `npm start` task will create a new folder `dist` at the root level. This will contain the bundled JavaScript file, and compiled CSS file.

### Production Steps
`npm run build` will bundle JavaScript and CSS for production.
