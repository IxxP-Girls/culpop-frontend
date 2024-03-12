import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { searchPopups } from '../../api/popup';
import { CardProps } from '../../types/types';

const staleTime = 1000 * 3;

const useSearchPopupsInfiniteQuery = (word: string) => {
  const { data, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['@ListPopups', word],
    queryFn: ({ pageParam = 1 }) => searchPopups(word, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: CardProps[], allPages: CardProps[][]): number | undefined => {
      const nextPage = lastPage.length < 10 ? undefined : allPages.length + 1;

      return nextPage;
    },
    staleTime,
  });

  return { searchPopups: data?.pages.flat(), hasNextPage, fetchNextPage };
};

export default useSearchPopupsInfiniteQuery;
