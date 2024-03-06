import { useState } from 'react';
import { Container, ActionIcon, Flex, Text, Divider, Button } from '@mantine/core';
import Cards from './Cards';
import { useNavigate } from 'react-router-dom';
import getFormattedDate from '../../utils/getFormattedDate';
import getDayOfWeek from '../../utils/getDayOfWeek';

const dayIcons = Array.from({ length: 15 }, (_, index) => getFormattedDate({ n: index }));

const Dates = () => {
  const navigate = useNavigate();
  const today = getFormattedDate();
  const [clicked, setClicked] = useState<string>(today);

  const handleClick = (date: string) => setClicked(date);

  const renderIcon = (date: string, idx: number) => {
    const isClicked: boolean = date === clicked;
    const dayOfMonth: number = parseInt(date.slice(-2));

    return (
      <ActionIcon
        key={date}
        onClick={() => handleClick(date)}
        variant="filled"
        radius="xl"
        aria-label="date icon"
        size={isClicked ? 60 : 40}
        color={isClicked ? undefined : 'dark.6'}>
        {isClicked ? (
          <Flex justify="center" align="center" direction="column">
            <Text fz={12} fw={600}>
              {date === today ? 'TODAY' : getDayOfWeek(idx)}
            </Text>
            {dayOfMonth}
          </Flex>
        ) : (
          dayOfMonth
        )}
      </ActionIcon>
    );
  };

  return (
    <>
      <Container my={40} p={0}>
        <Flex justify="space-between" align="center">
          {dayIcons.map(renderIcon)}
        </Flex>
      </Container>
      <Divider />
      <Container p={0}>
        <Flex justify="flex-end" style={{ cursor: 'pointer' }} py={20} fz={14} onClick={() => navigate('/popups/list')}>
          전체보기
        </Flex>
        <Cards date={clicked} />
        <Button fullWidth h={45} my={20} variant="outline" color="dark.0" onClick={() => navigate('/popups/list')}>
          더보기
        </Button>
      </Container>
    </>
  );
};

export default Dates;
