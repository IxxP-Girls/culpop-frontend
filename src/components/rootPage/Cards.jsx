import useMainPopupsQuery from '../../hooks/queries/useMainPopupsQuery';
import Deck from '../common/Deck';

const Cards = ({ date }) => {
  const { mainPopups } = useMainPopupsQuery(date);

  return <Deck data={mainPopups} />;
};

export default Cards;
