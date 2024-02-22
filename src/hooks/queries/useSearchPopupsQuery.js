import { useQuery } from '@tanstack/react-query';

const staleTime = 1000 * 3;

const useSearchPopupsQuery = (area, startDate, endDate) => {
  const query = useQuery({
    queryKey: ['@SearchPopups', area, startDate, endDate],
    queryFn: () => searchPopups(area, startDate, endDate),
    staleTime,
  });

  return { ...query, searchPopups: query.data };
};

export default useSearchPopupsQuery;
