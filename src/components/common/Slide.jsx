import { Paper, Text, Container } from '@mantine/core';
import { RiMapPin2Fill } from 'react-icons/ri';

const Slide = ({ image, title, address, startDate, endDate }) => {
  return (
    <Paper
      p="xl"
      h={480}
      w={480}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 0,
      }}>
      <Container pos={'fixed'} top={300} w={400}>
        <Text fw={900} fz={24} mt={'xs'} lineClamp={1}>
          {title}
        </Text>
        <Text size="md">
          {startDate} - {endDate}
        </Text>
        <Container display={'flex'} m={0} p={0} style={{ alignItems: 'center', gap: 5 }}>
          <RiMapPin2Fill />
          <Text size="md">{address}</Text>
        </Container>
      </Container>
    </Paper>
  );
};

export default Slide;
