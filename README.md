# Opengovsg Best Practices

This are the best practices that the opengovsg team are using. It's meant to be a reference for teams especially when starting new projects.

## Contents

1. [Linting](#linting)

## Linting

### Setup

#### IDE/Editor

Most IDEs/text editors have some way to enable automatic linting of the files you're editing. Here's a list of editors + plugins that the team are using:

* Sublime Text + [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter)
* Atom - ???

TODO: Flesh out with more examples

#### Git Hooks

A recommended way to enforce linting in a codebase is to set up [git hooks](https://git-scm.com/book/gr/v2/Customizing-Git-Git-Hooks) to lint the codebase. This will help to ensure that the git history is tidy and that all pull requests meet the code style/formatting standards, preventing code reviews from being cluttered with basic comments on code style/formatting.

Recommended hooks: `pre-commit` or `pre-push`

TODO: Flesh out with instructions on recommended hook setup + script

#### CI

Linting should also be done as part of the CI process. A common setup in the team is to use [Travis CI](https://docs.travis-ci.com/user/getting-started/). A sample Travis YAML file can be [found here](/linting/.travis.yml).

### JavaScript

#### eslint config

The team has a standard eslint config that every project should use as a base config before extending it where necessary. It's available as an npm package - instructions to install and use can be [found here](https://www.npmjs.com/package/@opengovsg/eslint-config-opengovsg).

An example of how to use this can be [seen here](https://github.com/datagovsg/beeline-frontend/pull/658/commits/25704f0a0e0ced181923667dee6742eb4937bf02). Pay special attention to `.eslintrc.json` and how to extend the base config to suit individual project needs (e.g. unique global variables for angular projects).

#### Prettier

TODO: Add details on prettier

**[⬆ back to top](#contents)**


TODO:
* Add links to good tutorials (for onboarding)