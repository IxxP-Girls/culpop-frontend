const formatDetailDate = timestamp => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const min = date.getMinutes();

  return `${year}.${month}.${day}. ${hour}:${min}`;
};

export default formatDetailDate;
