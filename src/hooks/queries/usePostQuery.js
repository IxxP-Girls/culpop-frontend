import { useQuery } from '@tanstack/react-query';
import { fetchPost } from '../../api/post';

const staleTime = 1000 * 3;

const usePostQuery = id => {
  const query = useQuery({
    queryKey: ['@Post', id],
    queryFn: () => fetchPost(id),
    staleTime,
  });

  return { ...query, postInfo: query.data };
};

export default usePostQuery;
