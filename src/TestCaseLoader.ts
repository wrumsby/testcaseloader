import { readdirSync, statSync } from 'fs';
import { extname, join, parse, resolve } from 'path';
import { sort } from './sort';

export const INPUT_PREFIX = 'input-';
export const EXPECTED_PREFIX = 'expected-';

interface TestCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expected: any | undefined;
}

export class TestCaseLoader {
  private directory: string;

  constructor(directory?: string) {
    if (directory == null) {
      this.directory = join(resolve(__dirname), '../testcases');
    } else {
      this.directory = join(resolve(__dirname), directory);
    }
  }

  public load(name: string): Array<TestCase> {
    const directory = join(this.directory, name);
    const paths = readdirSync(directory);

    const result = paths
      .map((path: string) => {
        const fullPath = join(directory, '/', path);

        return fullPath;
      })
      .filter((path: string) => {
        try {
          const stats = statSync(path);

          return !stats.isDirectory();
          /* istanbul ignore next */
        } catch (e) {
          /* istanbul ignore next */
          console.warn(e.message);

          /* istanbul ignore next */
          return false;
        }
      })
      .filter((path: string) => extname(path) === '.js')
      .sort((a: string, b: string) => {
        const { name: aName } = parse(a);
        const { name: bName } = parse(b);

        return sort(aName, bName);
      })
      .reduce((testCases: Array<TestCase>, path: string) => {
        const n = testCases.length;
        const { base } = parse(path);

        if (base.startsWith(INPUT_PREFIX)) {
          const testCase: TestCase = {
            input: require(path),
            expected: undefined
          };

          testCases.push(testCase);
        }

        if (base.startsWith(EXPECTED_PREFIX)) {
          const testCase = testCases[n - 1];

          testCase.expected = require(path);
        }

        return testCases;
      }, []);

    return result;
  }
}
