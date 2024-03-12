import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { listPopups } from '../../api/popup';
import { CardProps } from '../../types/types';

interface UseListPopupsQueryParams {
  area: string;
  startDate: string;
  endDate: string;
}

const useListPopupsInfiniteQuery = ({ area, startDate, endDate }: UseListPopupsQueryParams) => {
  const { data, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['@ListPopups', area, startDate, endDate],
    queryFn: ({ pageParam = 1 }) => listPopups(area, startDate, endDate, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: CardProps[], allPages: CardProps[][]): number | undefined => {
      const nextPage = lastPage.length < 10 ? undefined : allPages.length + 1;

      return nextPage;
    },
    staleTime: 1000 * 10,
  });

  return { listPopups: data?.pages.flat(), hasNextPage, fetchNextPage };
};

export default useListPopupsInfiniteQuery;
