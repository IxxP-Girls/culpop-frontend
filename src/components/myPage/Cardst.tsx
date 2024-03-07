import Deck from '../common/Deck';
import useUserInterestsQuery from '../../hooks/queries/useUserInterestsQuery';

interface CardsProps {
  sortOption: string;
}

const Cards: React.FC<CardsProps> = ({ sortOption }) => {
  const { userInterests } = useUserInterestsQuery(sortOption);

  return <Deck data={userInterests} />;
};

export default Cards;
