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

Linting should also be done as part of the CI process. 

TODO: Include standard `.travis.yaml` file

### JavaScript

#### eslint config

The team has a standard eslint config that every project should use as a base config before extending it where necessary. It's available as an [npm package and instructions to install and use can be found here](https://www.npmjs.com/package/@opengovsg/eslint-config-opengovsg).

#### Prettier

TODO: Add details on prettier

**[⬆ back to top](#contents)**