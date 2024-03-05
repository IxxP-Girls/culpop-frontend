import { useQuery } from '@tanstack/react-query';
import { searchPopups } from '../../api/popup';

const staleTime = 1000 * 3;

const useSearchPopupsQuery = (word, page) => {
  const query = useQuery({
    queryKey: ['@ListPopups', word, page],
    queryFn: () => searchPopups(word, page),
    staleTime,
  });

  return { ...query, searchPopups: query.data };
};

export default useSearchPopupsQuery;
