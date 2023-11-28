import { useState } from 'react';
import { Container, ActionIcon, Flex, Text, Divider } from '@mantine/core';
import Cards from './Cards';

const Dates = () => {
  const date = new Date();
  const today = date.getDate();
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const [clicked, setClicked] = useState(today);

  const handleClick = date => setClicked(date);

  const icons = Array.from({ length: 15 }, (_, index) => {
    const day = today + index <= lastDayOfMonth ? today + index : today + index - lastDayOfMonth;
    return day;
  });

  return (
    <>
      <Container my={40} p={0}>
        <Flex justify={'space-between'} align={'center'}>
          {icons.map(date => (
            <ActionIcon
              key={date}
              onClick={() => handleClick(date)}
              variant="filled"
              radius="xl"
              aria-label="today"
              size={date === clicked ? 60 : 40}
              color={date === clicked ? undefined : 'dark.6'}>
              {date === clicked ? (
                <Flex justify="center" align="center" direction="column">
                  <Text fz={12} fw={500}>
                    TODAY
                  </Text>
                  {date}
                </Flex>
              ) : (
                date
              )}
            </ActionIcon>
          ))}
        </Flex>
      </Container>
      <Divider />
      <Cards category={'popup'} />
      <Cards category={'exhibition'} />
    </>
  );
};

export default Dates;
