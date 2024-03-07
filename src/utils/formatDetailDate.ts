const formatDetailDate = (createdAt: number): string => {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const min = date.getMinutes();

  return `${year}.${month}.${day}. ${hour}:${min}`;
};

export default formatDetailDate;
