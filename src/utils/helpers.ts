export const getFormattedDateWithoutDays = (date: string): string => {
  const formattedDate = new Date(date)

  const year = formattedDate.getFullYear();

  let month = (1 + formattedDate.getMonth()).toString();

  month = month.length > 1 ? month : `0${month}`;

  return `${month}-${year}`;
}