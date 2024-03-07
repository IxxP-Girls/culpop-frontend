import Deck from '../common/Deck';
import useSearchPopups from '../../hooks/queries/useSearchPopupsQuery';

interface SearchCardsProps {
  date: {
    word: string;
    page: number;
  };
}

const SearchCards: React.FC<SearchCardsProps> = ({ date }) => {
  const { word, page } = date;

  const { searchPopups } = useSearchPopups(word, page);

  return <Deck data={searchPopups} />;
};

export default SearchCards;
