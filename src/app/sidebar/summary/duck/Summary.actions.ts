import * as type from './Summary.types';

export const setSummary = (value: string) => ({
  type: type.SET_SUMMARY,
  value,
});
