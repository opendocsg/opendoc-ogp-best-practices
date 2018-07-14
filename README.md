# Opengovsg Best Practices

This are the best practices that the opengovsg team are using. It's meant to be a reference for teams especially when starting new projects.

## Contents

1. [Linting](#linting)
1. [GitHub](#github)
1. [Node Dev Setup](#node-dev-setup)

## Linting

### Setup

#### IDE/Editor

Most IDEs/text editors have some way to enable automatic linting of the files you're editing. Here's a list of editors + plugins that the team are using:

* Sublime Text + [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter)
  * Provide sublime text setup for linting here
* Atom - ???
* VS Code + ESLint + Document This
* People who use other editors can add their own setups here

TODO: Flesh out with more examples

#### Git Hooks

A recommended way to enforce linting in a codebase is to set up [git hooks](https://git-scm.com/book/gr/v2/Customizing-Git-Git-Hooks) to lint the codebase. This will help to ensure that the git history is tidy and that all pull requests meet the code style/formatting standards, preventing code reviews from being cluttered with basic comments on code style/formatting.

Recommended hooks: `pre-commit` or `pre-push`

Sample setup: beeline-frontend

1. Install the [`pre-commit` npm package](https://www.npmjs.com/package/pre-commit) to set up the git `pre-commit` hook
1. Configure `pre-commit` to run an npm script in `package.json` ([see here](https://github.com/datagovsg/beeline-frontend/blob/715d478db76a903f1534157228539a8bdde9e032/package.json#L163-L165))
1. Install the [`lint-staged` npm package](https://www.npmjs.com/package/lint-staged) to only run linter against staged files
1. Configure `lint-staged` to only look for `*.js` files (optionally automatically `git add`) ([see here](https://github.com/datagovsg/beeline-frontend/blob/715d478db76a903f1534157228539a8bdde9e032/package.json#L166-L171))

#### CI

Linting should also be done as part of the CI process. A common setup in the team is to use [Travis CI](https://docs.travis-ci.com/user/getting-started/). A sample Travis YAML file can be [found here](/linting/.travis.yml).

### JavaScript

#### eslint config

The team has a standard eslint config that every project should use as a base config before extending it where necessary. It's available as an npm package - instructions to install and use can be [found here](https://www.npmjs.com/package/@opengovsg/eslint-config-opengovsg).

An example of how to use this can be [seen here](https://github.com/datagovsg/beeline-frontend/pull/658/commits/25704f0a0e0ced181923667dee6742eb4937bf02). Pay special attention to `.eslintrc.json` and how to extend the base config to suit individual project needs (e.g. unique global variables for angular projects).

TODO:
* Add addtional eslint plugins which can provide useful static analysis:
  * [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node) and [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) (untested)
    * Makes sure you require available files and modules
  * [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
    * Makes sure promises are used correctly

#### Prettier

TODO: Add details on prettier

**[⬆ back to top](#contents)**


TODO:
* Add links to good tutorials (for onboarding)

## GitHub

### Branching strategies

### Branch naming

### Commit naming

See [How to Write a Git Commit](https://chris.beams.io/posts/git-commit/)

## Node Dev Setup

When you're developing, you want to see your changes reflect automatically. 
Various packages can automatically watch for changes and restart your build and run steps.

* `nodemon` to restart your server
* `webpack --watch` to build static assets 
* `webpack-serve` - ???
