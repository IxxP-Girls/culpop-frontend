import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import userState from '../../recoil/atom/userState';
import { fetchInterests } from '../../api/user';

const staleTime = 1000 * 3;

const useUserInterestsQuery = sortOption => {
  const email = useRecoilValue(userState);

  const query = useQuery({
    queryKey: ['@UserInterests', email, sortOption],
    queryFn: () => fetchInterests(sortOption),
    staleTime,
  });

  return { ...query, userInterests: query.data };
};

export default useUserInterestsQuery;
