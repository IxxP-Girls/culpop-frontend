import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchPopups } from '../../api/popup';

const staleTime = 1000 * 60 * 60;

const useMainPopupsQuery = (date: string) => {
  const query = useSuspenseQuery({
    queryKey: ['@MainPopups', date],
    queryFn: () => fetchPopups(date),
    staleTime,
  });
  return { ...query, mainPopups: query.data };
};

export default useMainPopupsQuery;
