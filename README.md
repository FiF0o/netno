# React Redux webpack starter template using twitter API
This app uses twitter API to fetch tweet feeds.</br>
The aim of this repository is to provide a template for developing [React](https://facebook.github.io/react/) based applications using ES6 syntax and [webpack](https://webpack.github.io/) as a module bundler.</br>
Redux is available on `refactor-redux` branch.

## Scripts
* Twitter API server-side runs on `process.env.PORT` or `:2000`, use `node api/app.js` to fire the API.
* `npm run build` to bundle files.

### Front-end
React and Redux front-end layer interfacing with the API
Use `npm run start` for development mode, app will open on port `:3000`

### API
Authentication is managed using `OAUTH` in the backend and twitter API crendetials are not required as we exposed a proxy `./api/twitter`.</br>
You can ignore `./config/credentials.json` file.</br>
The API has got 2 routes:
- `/mentions`, GET mentions_timeline
- `/search`, GET tweets

## Usage

* Download the files and place them in your project directory
* Run `npm i` to install the dependencies
* Run `npm run build` to build the project
* Run `npm run dev` to build the project, start watching files and run the local server
* Run `npm test` to run the tests once
* Run `npm run test:ci` to watch the `src` directory for changes and run the tests

## Features

* Bundles [React](https://facebook.github.io/react/) with `jsx` syntax
* Compiles ES6 (with [Babel](https://babeljs.io/))
* Linting (with [ESLint](http://eslint.org/))
* Build with [webpack](https://webpack.github.io/)
* Test with [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/)
* Use [Karma](http://karma-runner.github.io/) to run the tests
* Develop locally with [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html)

## MISC
Bundler
* [A modern React starter pack based on webpack](http://krasimirtsonev.com/blog/article/a-modern-react-starter-pack-based-on-webpack)

## Improvements
- Styling
- Unit tests
- Badges
