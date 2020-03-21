/* eslint-env jest */
import { sort } from './sort';
import { INPUT_PREFIX, EXPECTED_PREFIX } from './TestCaseLoader';

describe('sort', () => {
  it('should sort input before expected', () => {
    const actual = sort(`${INPUT_PREFIX}0`, `${EXPECTED_PREFIX}0`);

    expect(actual).toBe(-1);
  });

  it('should sort expected after input', () => {
    const actual = sort(`${EXPECTED_PREFIX}0`, `${INPUT_PREFIX}0`);

    expect(actual).toBe(1);
  });

  it('should sort based on suffix', () => {
    const actual = sort(`${EXPECTED_PREFIX}1`, `${EXPECTED_PREFIX}0`);

    expect(actual).toBe(1);
  });
});
