import Deck from '../common/Deck';
import useListPopupsInfiniteQuery from '../../hooks/queries/useListPopupsInfiniteQuery';
import useObserver from '../../hooks/useObserver';
import { useState, useCallback, useEffect } from 'react';
import { Skeleton } from '@mantine/core';

interface CardsProps {
  date: {
    area: string;
    startDate: string;
    endDate: string;
  };
}

const Cards: React.FC<CardsProps> = ({ date }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { listPopups, hasNextPage, fetchNextPage } = useListPopupsInfiniteQuery(date);

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
      <Deck data={listPopups} />
      {hasNextPage && (
        <div ref={observerRef}>
          <Skeleton height={10} />
        </div>
      )}
    </>
  );
};

export default Cards;
