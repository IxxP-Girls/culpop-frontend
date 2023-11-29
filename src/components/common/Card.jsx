import { Container, Flex, Text, Title, Image, Grid } from '@mantine/core';
import { RiMapPin2Fill, RiHeartLine } from 'react-icons/ri';

const Card = ({ title, location, dates, imgUrl }) => {
  return (
    <Grid h={200} w={470} py={30} pos={'relative'}>
      <Grid.Col span={4}>
        <Image src={imgUrl} h={140} w={140} radius={10} alt="No way!" />
      </Grid.Col>
      <Grid.Col span={7}>
        <Flex direction={'column'}>
          <Title order={5}>{title}</Title>
          <Container display={'flex'} m={0} p={0} style={{ alignItems: 'center', gap: 5 }}>
            <RiMapPin2Fill />
            <Text size="md" fz={14}>
              {location}
            </Text>
          </Container>
          <Text size="md" pos={'absolute'} fz={14} fw={700} bottom={25} right={0}>
            {dates}
          </Text>
        </Flex>
      </Grid.Col>
      <Grid.Col span={1}>
        <RiHeartLine size={25} />
      </Grid.Col>
    </Grid>
  );
};

export default Card;
