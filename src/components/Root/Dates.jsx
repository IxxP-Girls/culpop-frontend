import { useState } from 'react';
import { Container, ActionIcon, Flex, Text, Divider, Button } from '@mantine/core';
import Cards from '../common/Cards';
import { useNavigate } from 'react-router-dom';

const Dates = () => {
  const navigate = useNavigate();
  const date = new Date();
  const today = `${date.getFullYear()} - ${(date.getMonth() + 1).toString().padStart(2, 0)} - ${date
    .getDate()
    .toString()
    .padStart(2, 0)}`;
  const [clicked, setClicked] = useState(today);

  const handleClick = date => setClicked(date);

  const icons = Array.from({ length: 15 }, (_, index) => {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const targetDate = new Date(currentDate.setDate(currentDate.getDate() + index));

    const year = targetDate.getFullYear();
    const month = (targetDate.getMonth() + 1).toString().padStart(2, 0);
    const day = targetDate.getDate().toString().padStart(2, 0);

    return `${year} - ${month} - ${day}`;
  });

  const getDayOfWeek = idx => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = date.getDay();
    return weekdays[(dayOfWeek + idx) % 7];
  };

  const renderIcon = (date, idx) => {
    const isClicked = date === clicked;
    const iconSize = isClicked ? 60 : 40;
    const iconColor = isClicked ? undefined : 'dark.6';

    return (
      <ActionIcon
        key={date}
        onClick={() => handleClick(date)}
        variant="filled"
        radius="xl"
        aria-label="today"
        size={iconSize}
        color={iconColor}>
        {isClicked ? (
          <Flex justify="center" align="center" direction="column">
            <Text fz={12} fw={500}>
              {date === today ? 'TODAY' : getDayOfWeek(idx)}
            </Text>
            {parseInt(date.match(/\d+$/)[0])}
          </Flex>
        ) : (
          parseInt(date.match(/\d+$/)[0])
        )}
      </ActionIcon>
    );
  };

  return (
    <>
      <Container my={40} p={0}>
        <Flex justify="space-between" align="center">
          {icons.map(renderIcon)}
        </Flex>
      </Container>
      <Divider />
      <Container p={0}>
        <Flex
          display="flex"
          justify="flex-end"
          style={{ cursor: 'pointer' }}
          py={20}
          fz={14}
          onClick={() => navigate('/popups')}>
          전체보기
        </Flex>
        <Cards date={clicked} />
        <Button fullWidth h={45} my={20} variant="outline" color="dark.0" onClick={() => navigate('/popups')}>
          더보기
        </Button>
      </Container>
    </>
  );
};

export default Dates;
