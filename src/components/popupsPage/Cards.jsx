import Deck from '../common/Deck';
import useListPopupQuery from '../../hooks/queries/useListPopupsQuery';

const Cards = ({ date }) => {
  const { listPopups } = useListPopupQuery(...date);

  return <Deck data={listPopups} />;
};

export default Cards;
