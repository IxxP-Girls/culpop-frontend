import { useSuspenseQuery } from '@tanstack/react-query';
import { listPopups } from '../../api/popup';

const staleTime = 1000 * 3;

interface UseListPopupsQueryParams {
  area: string;
  startDate: string;
  endDate: string;
  page: number;
}

const useListPopupsQuery = ({ area, startDate, endDate, page }: UseListPopupsQueryParams) => {
  const query = useSuspenseQuery({
    queryKey: ['@ListPopups', area, startDate, endDate],
    queryFn: () => listPopups(area, startDate, endDate, page),
    staleTime,
  });

  return { ...query, listPopups: query.data ?? {} };
};

export default useListPopupsQuery;
