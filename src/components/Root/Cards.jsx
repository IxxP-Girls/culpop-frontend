import Card from './Card';
import { Container, Title, Grid, Button, Flex } from '@mantine/core';

const Cards = ({ category }) => {
  return (
    <Container p={0}>
      <Flex display={'flex'} justify={'flex-end'} py={20} fz={14}>
        전체보기
      </Flex>
      <Title order={3}>{category === 'popup' ? '팝업스토어' : '전시회'}</Title>
      {
        <Grid>
          {Array.from({ length: 4 }, (_, idx) => 0 + idx).map(date => (
            <Grid.Col span={6} key={date}>
              <Card />
            </Grid.Col>
          ))}
        </Grid>
      }
      <Button fullWidth h={45} my={20} variant="outline" color="dark.0">
        더보기
      </Button>
    </Container>
  );
};

export default Cards;
