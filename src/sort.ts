import { INPUT_PREFIX, EXPECTED_PREFIX } from './TestCaseLoader';

export const sort = (aName: string, bName: string): number => {
  const aNumber = parseInt(aName.split('-')[1], 10);
  const bNumber = parseInt(bName.split('-')[1], 10);

  const diff = aNumber - bNumber;

  if (diff === 0) {
    if (aName.startsWith(INPUT_PREFIX) && bName.startsWith(EXPECTED_PREFIX)) {
      return -1;
    }

    if (aName.startsWith(EXPECTED_PREFIX) && bName.startsWith(INPUT_PREFIX)) {
      return 1;
    }
  }

  return diff;
};
