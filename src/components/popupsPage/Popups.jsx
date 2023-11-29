import { Container, Divider, Flex, Title } from '@mantine/core';
import Cards from '../common/Cards';
import { useState } from 'react';
import CustomButton from '../common/CustomButton';
import { DatePickerInput } from '@mantine/dates';
import { dates } from '../../constants/dates';
import { regions } from '../../constants/regions';

const Popups = () => {
  const [clickDate, setClickDate] = useState('오늘');
  const [clickRegion, setClickRegion] = useState('전체');
  const [value, setValue] = useState([null, null]);

  const CustomButtonGroup = (data, clicked, setClicked) =>
    data.map(item => <CustomButton key={item} data={item} clicked={clicked} setClicked={setClicked} />);

  const DatePickerInputGroup = () =>
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

  return (
    <Flex direction={'column'} mt={20}>
      <Flex>
        <Container w={'100%'} m={0} p={0}>
          <Flex align={'center'}>
            <Title order={4} w={100}>
              날짜
            </Title>
            {CustomButtonGroup(dates, clickDate, setClickDate)}
          </Flex>
          <Divider my={10} />
          {DatePickerInputGroup()}
        </Container>
      </Flex>
      <Flex>
        <Container w={'100%'} m={0} p={0}>
          <Flex align={'center'}>
            <Title order={4} w={100}>
              지역
            </Title>
            {CustomButtonGroup(regions, clickRegion, setClickRegion)}
          </Flex>
          <Divider my={10} />
        </Container>
      </Flex>
      <Cards />
    </Flex>
  );
};

export default Popups;
