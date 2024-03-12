import Deck from '../common/Deck';
import useSearchPopupsInfiniteQuery from '../../hooks/queries/useSearchPopupsInfiniteQuery';
import useObserver from '../../hooks/useObserver';
import { useState, useCallback, useEffect } from 'react';
import { Skeleton } from '@mantine/core';

interface SearchCardsProps {
  date: {
    word: string;
  };
}

const SearchCards: React.FC<SearchCardsProps> = ({ date }) => {
  const { word } = date;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { searchPopups, hasNextPage, fetchNextPage } = useSearchPopupsInfiniteQuery(word);

  const getNextPage = useCallback(() => {
    if (isLoading || !hasNextPage) return;
    setIsLoading(true);
    fetchNextPage();
    setIsLoading(false);
  }, [fetchNextPage, isLoading, hasNextPage]);

  useEffect(() => {
    getNextPage();
  }, [getNextPage]);

  const observerRef = useObserver(getNextPage);
  return (
    <>
      <Deck data={searchPopups} />
      {hasNextPage && (
        <div ref={observerRef}>
          <Skeleton height={10} />
        </div>
      )}
    </>
  );
};

export default SearchCards;
