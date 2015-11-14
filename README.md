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

## [MIT](https://opensource.org/licenses/MIT) License
Copyright (c) 2105 Chris Landa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
