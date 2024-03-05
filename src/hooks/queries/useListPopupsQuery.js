import { useQuery } from '@tanstack/react-query';
import { listPopups } from '../../api/popup';

const staleTime = 1000 * 3;

const useListPopupsQuery = (area, startDate, endDate, page) => {
  const query = useQuery({
    queryKey: ['@ListPopups', area, startDate, endDate],
    queryFn: () => listPopups(area, startDate, endDate, page),
    staleTime,
  });

  return { ...query, listPopups: query.data };
};

export default useListPopupsQuery;
