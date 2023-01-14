@clowder-generator: generator-generator
=======================================

Introduction
------------
`@clowder-generator/generator-generator` is a Yeoman generator for creating new Yeoman generators in TypeScript, with Jest and Cucumber, and set up with a CircleCI pipeline.

Getting Started
---------------
To get started with `@clowder-generator/generator-generator`, you will first need to install Yeoman and the `@clowder-generator/generator-generator` package.
You can do this by running the following commands:

```
npm install -g yo
npm install -g @clowder-generator/generator-generator
```

Once the installation is complete, you can use the `yo @clowder-generator/generator-generator` command to create a new generator.
This will prompt you for the details of your generator, such as its name, its version and its description, and then generate the necessary files and directories for your generator.

**WARNING: the new generator will be created in the current folder, anther folder that contains your new code will NOT be created. Your current folder will be the root of your project.**

Testing and CI/CD
-----------------
The Clowder Generator Generator includes a test suite built with Jest, as well as Cucumber integration tests. You can run the tests by running npm test. The generator also includes a CircleCI configuration file for CI/CD pipeline.

License
-------
The Clowder Generator Generator is licensed under the MIT License.
