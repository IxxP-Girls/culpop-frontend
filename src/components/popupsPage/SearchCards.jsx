import Deck from '../common/Deck';
import useSearchPopups from '../../hooks/queries/useSearchPopupsQuery';

const SearchCards = ({ date }) => {
  const { searchPopups } = useSearchPopups(...date);

  return <Deck data={searchPopups} />;
};

export default SearchCards;
