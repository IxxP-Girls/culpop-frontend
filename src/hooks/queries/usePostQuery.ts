import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchPost } from '../../api/post';

const staleTime = 1000 * 3;

const usePostQuery = (id: number) => {
  const query = useSuspenseQuery({
    queryKey: ['@Post', id],
    queryFn: () => fetchPost(id),
    staleTime,
  });

  return { postInfo: query.data };
};

export default usePostQuery;
