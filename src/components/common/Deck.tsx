import Card from './Card';
import { Grid } from '@mantine/core';
import { CardProps } from '../../types/types';

interface DeckProps {
  data: CardProps[];
}

const Deck: React.FC<DeckProps> = ({ data }) => {
  return (
    <Grid>
      {data.map(({ popupId, title, address, startDate, endDate, image, likeCheck }) => (
        <Grid.Col span={6} key={popupId}>
          <Card
            popupId={popupId}
            title={title}
            address={address}
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

export default Deck;
