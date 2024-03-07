type GetFormattedDateOptions = {
  n?: number;
  dateString?: string;
};

const getFormattedDate = (options: GetFormattedDateOptions = {}): string => {
  const { n = 0, dateString } = options;

  let date;
  if (dateString) {
    date = new Date(dateString);
  } else {
    date = new Date();
    date.setDate(date.getDate() + n);
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export default getFormattedDate;
