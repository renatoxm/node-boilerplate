# Node.js boilerplate with express, typescript and test

A Setup boilerplate with node.js project using express along with typescript including ESLint and Prettier to enforce code style, Husky and lint-staged to review our commits in addition to Mocha and Chai to write tests.

## Dependencies

- **Typescript:** This one allow us to use typescript in our project.
- **Express:** A Node.js framework, is going to be the main tool to build our API.
- **@types/express:** This package contains type definitions for Express.
- **eslint-import-resolver-typescript:** This library allow us to resolve imports from TypeScript.
- **ts-node:** Is a TypeScript execution engine for Node.js, it JIT (just in time) transforms TypeScript code to JavaScript allowing us to use TypeScript without pre-compiling our code and includes other bunch of useful features.
- **tsconfig-paths:** TypeScript accepts arbitrary paths in our tsconfig.json which can replace relative routes in our code, however if we try to run our files with node or ts-node, the modules won't be found, this package helps us to load those modules.
- **nodemon:** Nodemon is a tool which allow us to restart our server whenever we do a change in our code.
- **ESLint:** Is a utility who helps us to find and fix errors in our code. Due to the fact that JavaScript is a loosely-typed language there is more probability we introduce errors. In this case we're installing the 7.32 version instead of the latest (8.1.0) because is the latest compatible version for Airbnb style guide, which is the one that I prefer.
- **Prettier:** A formatter for our code, which helps us to follow a certain code style.
- **eslint-config-prettier:** Turns off all the unnecessary rules or the ones that might conflict with Prettier.
- **Eslint-plugin-prettier:** Extension to add prettier linting.
- **Husky:** Is a tool which help us to run git hooks in order to improve our commits and git processes.
- **lint-staged:** It help us to run linters in our staged files (git).

## Testing Dependencies

- **Mocha:** JavaScript test framework.
- **Chai:** JavaScript assertion library, can be combined with any other testing framework.
- **Supertest:** HTTP assertion library.

## Installation

```sh
cp .env.example .env

npm i
```

## Scripts

### Basic

In order to compile and run our ts code we're going to use three scripts, start, dev and build.

start is the one that will be executed by the server in case of a deployment (not covered in this blog),

```sh
npm start
```

dev for our normal development

```sh
npm run dev
```

and build to compile our TypeScript code

```sh
npm run build
```

### Linter and Prettier actions

run lint for linter

```sh
npm run lint
```

or prettier:check to find errors

```sh
npm run prettier:check
```

or use write to fix problems

```sh
npm run prettier:write
```

### Testing

For testing use

```sh
npm run test
```

## License

MIT
