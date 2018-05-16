# phone-simplifier
[![Build Status](https://travis-ci.org/dalenguyen/phone-simplifier.svg?branch=master)](https://travis-ci.org/dalenguyen/phone-simplifier)

An NPM package for simplifying phone number

The phone number is only formated basing on North America (+1) at the moment. 

## Installation 

Install using [__npm__](https://www.npmjs.com/).

```sh
npm install phone-simplifier
```

## Usage 

### Simplify your phone number 

```sh
const phone = require('phone-simplifier')

let simplifiedPhoneNumber = phone.simplify('phone-number-string');
```

Examples: 

```sh
+1 (234) 567-8910   => +1 (234) 567-8910
+12345678910        => (234) 567-8910
2345678910          => (234) 567-8910
234-567-8910        => (234) 567-8910
```

### Get clean phone number 

```sh
const phone = require('phone-simplifier')

let simplifiedPhone = phone.clean('phone-number-string');
```

Examples: 

```sh
+1 (234) 567-8910   => +12345678910
234-567-8910        => 2345678910
```

## Contributions

Feel free to report bugs and make feature requests in the [Issue Tracker](https://github.com/dalenguyen/phone-simplifier/issues), fork and create pull requests!

## LICENSE

Apache License 2.0