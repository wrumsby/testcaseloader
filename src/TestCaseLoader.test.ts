/* eslint-env jest */
import { TestCaseLoader } from './TestCaseLoader';

describe('TestCaseLoader', () => {
  describe('load', () => {
    it('should load test cases', () => {
      const loader = new TestCaseLoader();

      const actual = loader.load('simple');

      expect(actual).toHaveLength(1);
      expect(actual[0].input).toBe('A');
      expect(actual[0].expected).toBe('a');
    });

    it('should load test cases when a directory is passed to the constructor', () => {
      const loader = new TestCaseLoader('../testcases');

      const actual = loader.load('simple');

      expect(actual).toHaveLength(1);
      expect(actual[0].input).toBe('A');
      expect(actual[0].expected).toBe('a');
    });
  });
});
