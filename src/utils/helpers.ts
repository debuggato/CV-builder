export const getFormattedDateWithoutDays = (date: string): string => {
  console.log('Wed Apr 01 2020 15:37:32 GMT+0200 (Central European Summer Time)')
  const formattedDate = new Date(date)

  const year = formattedDate.getFullYear();

  let month = (1 + formattedDate.getMonth()).toString();


  month = month.length > 1 ? month : `0${month}`;

  return `${month}-${year}`;
}