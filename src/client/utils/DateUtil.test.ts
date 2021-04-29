import { getFormattedDateWithoutDays } from './DateUtil';

it('should format date with this pattern month-year', () => {
  const dateToConvert = 'Wed Apr 01 2020 15:37:32 GMT+0200 (Central European Summer Time)';

  expect(getFormattedDateWithoutDays(dateToConvert)).toBe('04-2020');
});