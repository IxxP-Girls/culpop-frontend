import { DATE_OPTIONS, DateOptions } from '../constants/dates';
import getFormattedDate from './getFormattedDate';

const handleDateChange = (
  clickDate: DateOptions,
  setStartDate: (dateStr: string) => void,
  setEndDate: (dateStr: string) => void,
  setValue: (dateRange: [Date | null, Date | null]) => void,
) => {
  const dateOptionsMap: { [K in DateOptions]?: number } = {
    [DATE_OPTIONS.TODAY]: 0,
    [DATE_OPTIONS.SEVEN_DAYS]: 7,
    [DATE_OPTIONS.TWO_WEEKS]: 14,
  };

  const n = dateOptionsMap[clickDate] ?? 0;

  setStartDate(getFormattedDate({ n }));
  setEndDate(getFormattedDate({ n }));

  setValue([null, null]);
};

export default handleDateChange;
