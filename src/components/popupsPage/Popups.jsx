import { Container, Divider, Flex, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import CustomButton from '../common/CustomButton';
import { REGIONS, DEFAULT_REGION } from '../../constants/regions';
import Cards from './Cards';
import SearchCards from './SearchCards';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import getFormattedDate from '../../utils/getFormattedDate';
import handleDateChange from '../../utils/handleDateChange';
import { DATE_OPTIONS } from '../../constants/dates';
import DatePickerInputGroup from './DatePickerInputGroup';

const CustomButtonGroup = ({ data, clicked, setClicked }) => (
  <>
    {data.map(item => (
      <CustomButton key={item} data={item} clicked={clicked} setClicked={setClicked} />
    ))}
  </>
);

const Popups = () => {
  const { name } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const word = query.get('word');

  const [clickDate, setClickDate] = useState(DATE_OPTIONS.TODAY);
  const [clickRegion, setClickRegion] = useState(DEFAULT_REGION);
  const [startDate, setStartDate] = useState(getFormattedDate());
  const [endDate, setEndDate] = useState(getFormattedDate());
  const [value, setValue] = useState([null, null]);

  useEffect(() => {
    handleDateChange(clickDate, setStartDate, setEndDate, setValue);
  }, [clickDate]);

  return (
    <Flex direction={'column'} mt={20}>
      <Container w={'100%'} m={0} p={0}>
        <Flex align={'center'}>
          <Title order={4} w={100}>
            날짜
          </Title>
          <CustomButtonGroup data={Object.values(DATE_OPTIONS)} clicked={clickDate} setClicked={setClickDate} />
        </Flex>
        <Divider my={10} />
        <DatePickerInputGroup clickDate={clickDate} value={value} setValue={setValue} />
      </Container>
      <Container w={'100%'} m={0} p={0}>
        <Flex align={'center'}>
          <Title order={4} w={100}>
            지역
          </Title>
          <CustomButtonGroup data={REGIONS} clicked={clickRegion} setClicked={setClickRegion} />
        </Flex>
        <Divider my={10} />
      </Container>
      {name === 'list' ? <Cards date={[clickRegion, startDate, endDate, 1]} /> : <SearchCards date={[word, 1]} />}
    </Flex>
  );
};

export default Popups;
