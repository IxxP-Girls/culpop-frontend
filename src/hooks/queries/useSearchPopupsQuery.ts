import { useSuspenseQuery } from '@tanstack/react-query';
import { searchPopups } from '../../api/popup';

const staleTime = 1000 * 3;

const useSearchPopupsQuery = (word: string, page: number) => {
  const query = useSuspenseQuery({
    queryKey: ['@ListPopups', word, page],
    queryFn: () => searchPopups(word, page),
    staleTime,
  });

  return { ...query, searchPopups: query.data ?? {} };
};

export default useSearchPopupsQuery;
