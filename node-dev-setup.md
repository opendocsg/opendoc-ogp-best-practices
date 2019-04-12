# Node.js Developer Setup

This covers various aspects of setting up an environment for development purposes

## Linting

See [Linting](linting.md)

## Running things on a dev machine

When you're developing, you want to see your changes reflect automatically. 
Various packages can automatically watch for changes and restart your build and run steps.

* `nodemon` to restart your server
* `webpack --watch` to build static assets 
* `http-server` - to host static assets
* `concurrently` - to run multiple processes in a single command via npm, eg `webpack --watch` and `nodemon`