import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async id => {
  const res = await axios.get(`/posts/${id}`);
  return res.data;
};

const staleTime = 1000 * 3;

const usePostQuery = id => {
  const query = useQuery({
    queryKey: ['@Post', id],
    queryFn: () => fetchData(id),
    staleTime,
  });

  return { ...query, postInfo: query.data };
};

export default usePostQuery;
