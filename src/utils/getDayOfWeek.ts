const getDayOfWeek = (idx: number): string => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + idx);

  return weekdays[targetDate.getDay()];
};

export default getDayOfWeek;
