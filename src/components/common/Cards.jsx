import Card from './Card';
import { Grid } from '@mantine/core';

const Cards = ({ cards }) => {
  return (
    <Grid>
      {cards.map(({ popupId, title, location, startDate, endDate, img }) => (
        <Grid.Col span={6} key={popupId}>
          <Card popupId={popupId} title={title} location={location} startDate={startDate} endDate={endDate} img={img} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Cards;
