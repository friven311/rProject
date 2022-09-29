# eSViktor

React-native internship project based on [design](https://www.figma.com/file/wF5yEpqXUnUlGLMVXE9auG/Real-Mate?node-id=3%3A6).

Before any changes to the project, please, read the [CONTRIBUTING.md](./CONTRIBUTING.md) guide.

## Getting started

We use [yarn](https://classic.yarnpkg.com) as a package manager.

First you need to install dependencies:

```bash
yarn install
```

If needed install iOS dependencies:

- `bundle install`
- `npx pod-install`
- make sure you call `npx pod-install` after every new native dependency addition

After these steps you can start Metro bundler `yar start` and
run the application by `yarn ios` or `yarn android`.

## Folder structure

```plaintext
viktor-shalamov-rn/
├── android/
├── ios/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── modules/
│   ├── router/
│   ├── services/
│   ├── store/
│   └── utils/
└── package.json
```

- `/src/` contains all the application code. This folder is processed by webpack.
- `/src/api/` contains communication layer code. All the requests together with [axios](https://axios-http.com) instance live there.
- `/src/assets/` contains all static assets.
- `/src/components/` contains all reusable components.
- `/src/modules/` contains separate application parts. This folder follows tree-like (same as DOM) structure.
- `/src/router/` contains routing related code together with initial routing.
- `/src/services/` contains third party services and integrations.
- `/src/store/` contains all [redux](https://redux-toolkit.js.org) related code.
- `/src/utils` contains reusable utils and helper functions.

## Available scripts

- `yarn android` - runs application in Android simulator
- `yarn ios` - runs application in iOS simulator
- `yarn lint` - runs [ESLint](https://eslint.org) against all `js` / `ts` code
- `yarn prepare` - sets up [Husky](https://typicode.github.io/husky)
- `yarn prettier` - entry point for [Prettier](https://prettier.io)
- `yarn start` - runs Metro bundler
- `yarn stylelint` - runs [Stylelint](https://stylelint.io) for all styles
