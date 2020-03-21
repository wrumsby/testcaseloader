# testcaseloader

`TestCaseLoader` is a small utility to load test cases from files.

Files are:

- expected to be written in JavaScript
- by default in a folder named `testcases` (or a subfolder of this folder)
- named with the prefix `input-` or `expected-` and an index suffix (e.g. `input-0.js`)

## Installation

```
npm install --save-dev testcaseloader
```

## Usage

```ts
import { TestCaseLoader } from 'testcaseloader';
import { someFunction } from './someFunction';

describe('someFunction', () => {
  // This will load testCases from ./testcases/someFunction
  // testCases are pairs of files named input-${n}.js and expected-${n}.js
  // e.g. input-0.js, expected-0.js, input-1.js, expected-1.js
  const testCases = new TestCaseLoader().load('someFunction');

  it('should work', () => {
    testCases.forEach(({ input, expected }) => {
      const actual = someFunction(input);

      expect(actual).toEqual(expected);
    });
  });
});
```
