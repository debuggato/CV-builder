import * as type from './Summary.types';

export const setSummaryAction = (value: string) => ({
  type: type.SET_SUMMARY,
  value,
});
