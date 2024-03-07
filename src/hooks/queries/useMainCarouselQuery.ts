import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchMainCarousel } from '../../api/popup';

const useMainCarouselQuery = () => {
  const query = useSuspenseQuery({
    queryKey: ['@MainCarousel'],
    queryFn: () => fetchMainCarousel(),
    staleTime: 1000,
  });

  return { ...query, main: query.data };
};

export default useMainCarouselQuery;
