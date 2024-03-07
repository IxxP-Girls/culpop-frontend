import Deck from '../common/Deck';
import useListPopupQuery from '../../hooks/queries/useListPopupsQuery';

interface CardsProps {
  date: {
    area: string;
    startDate: string;
    endDate: string;
    page: number;
  };
}

const Cards: React.FC<CardsProps> = ({ date }) => {
  const { listPopups } = useListPopupQuery(date);

  return <Deck data={listPopups} />;
};

export default Cards;
