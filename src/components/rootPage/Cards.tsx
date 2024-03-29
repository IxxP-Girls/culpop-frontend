import useMainPopupsQuery from '../../hooks/queries/useMainPopupsQuery';
import Deck from '../common/Deck';

interface CardsProps {
  date: string;
}

const Cards: React.FC<CardsProps> = ({ date }) => {
  const { mainPopups } = useMainPopupsQuery(date);

  return <Deck data={mainPopups} />;
};

export default Cards;
