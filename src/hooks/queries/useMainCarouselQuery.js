import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  const res = await axios.get('/popup/carousel');
  return res.data;
};

const useMainCarouselQuery = () => {
  const query = useQuery({
    queryKey: ['@MainCarousel'],
    queryFn: fetchData(),
  });

  return { ...query, mainCarousel: query.data };
};

export default useMainCarouselQuery;
