import { DatePickerInput, DateValue, DatesRangeValue } from '@mantine/dates';
import { Divider } from '@mantine/core';

interface DatePickerProps {
  clickDate: string;
  value: [DateValue, DateValue];
  setValue: (value: DatesRangeValue) => void;
}

const DatePickerInputGroup: React.FC<DatePickerProps> = ({ clickDate, value, setValue }) =>
  clickDate === '직접선택' && (
    <>
      <DatePickerInput
        w={300}
        type="range"
        ml={'30%'}
        valueFormat="YYYY / MM / DD"
        label="찾으시는 날짜를 선택하세요."
        placeholder="Pick dates range"
        value={value}
        onChange={setValue}
        clearable
      />
      <Divider my={15} />
    </>
  );

export default DatePickerInputGroup;
