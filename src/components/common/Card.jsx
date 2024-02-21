import { Container, Flex, Text, Title, Image, Grid, ActionIcon } from '@mantine/core';
import { TbHeart, TbHeartFilled, TbMapPin } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const Card = ({ popupId, title, location, startDate, endDate, image, likeCheck }) => {
  const navigate = useNavigate();

  return (
    <Grid h={200} w={470} py={30} pos={'relative'} onClick={() => navigate(`/popup/${popupId}`)}>
      <Grid.Col span={4}>
        <Image src={image} h={140} w={140} radius={10} alt="No way!" />
      </Grid.Col>
      <Grid.Col span={7}>
        <Flex direction={'column'}>
          <Title order={5}>{title}</Title>
          <Container display={'flex'} m={0} p={0} style={{ alignItems: 'center', gap: 5 }}>
            <TbMapPin />
            <Text size="md" fz={14}>
              {location}
            </Text>
          </Container>
          <Text size="md" pos={'absolute'} fz={14} fw={700} bottom={25} right={0}>
            {startDate} - {endDate}
          </Text>
        </Flex>
      </Grid.Col>
      <Grid.Col span={1}>
        <ActionIcon variant="transparent" c={'dark.0'}>
          {likeCheck ? <TbHeartFilled size={25} /> : <TbHeart size={25} />}
        </ActionIcon>
      </Grid.Col>
    </Grid>
  );
};

export default Card;
