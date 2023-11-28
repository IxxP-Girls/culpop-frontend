import { Container, Flex, Text, Title, Image, Grid } from '@mantine/core';
import { RiMapPin2Fill, RiHeartLine } from 'react-icons/ri';

const Card = () => {
  return (
    <Grid h={200} w={470} py={30} pos={'relative'}>
      <Grid.Col span={4}>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={140}
          w={140}
          radius={10}
          alt="No way!"
        />
      </Grid.Col>
      <Grid.Col span={7}>
        <Flex direction={'column'}>
          <Title order={5}>{'티퍼런스 팝업스토어 <잠시, 멈춤 5분>'}</Title>
          <Container display={'flex'} m={0} p={0} style={{ alignItems: 'center', gap: 5 }}>
            <RiMapPin2Fill />
            <Text size="md" fz={14}>
              {'서울특별시 종로구'}
            </Text>
          </Container>
          <Text size="md" pos={'absolute'} fz={14} fw={700} bottom={25} right={0}>
            {'23.12.03 - 23.12.14'}
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
