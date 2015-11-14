# Generator Minimal Generator
[![Build pass](https://travis-ci.org/stylesuxx/generator-minimal-generator.svg?branch=master)](https://travis-ci.org/stylesuxx/generator-minimal-generator?branch=master)  [![Dependencies](https://david-dm.org/stylesuxx/generator-minimal-generator.svg)](https://david-dm.org/stylesuxx/generator-minimal-generator)

>A yeoman generator that generates a minimal yeoman generator.

## Installation
Install the generator globally:

    sudo npm install generator-minimal-generator -g

## Usage
To invoke the generator create a directory for the generator and run it:

    mkdir generator-my-generator
    yo minimal-generator

## Structure
After invoking the generator you are left with a yeoman generator project with the following folder structure:

    project-root
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── app
        └── index.js

## License
[MIT](https://opensource.org/licenses/MIT)
