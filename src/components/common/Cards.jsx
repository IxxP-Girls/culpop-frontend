import Card from './Card';
import { Grid } from '@mantine/core';
import useMainPopupsQuery from '../../hooks/queries/useMainPopupsQuery';

const Cards = ({ date }) => {
  const { mainPopups } = useMainPopupsQuery(date);

  return (
    <Grid>
      {mainPopups.map(({ popupId, title, location, startDate, endDate, image, likeCheck }) => (
        <Grid.Col span={6} key={popupId}>
          <Card
            popupId={popupId}
            title={title}
            location={location}
            startDate={startDate}
            endDate={endDate}
            image={image}
            likeCheck={likeCheck}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Cards;
