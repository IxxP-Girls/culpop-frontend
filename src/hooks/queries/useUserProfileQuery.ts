import { useSuspenseQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atom/userState';
import { fetchProfile } from '../../api/user';

const staleTime = 1000 * 3;

const useUserProfileQuery = (page: number) => {
  const email = useRecoilValue(userState);

  const { data, refetch } = useSuspenseQuery({
    queryKey: ['@UserProfile', email, page],
    queryFn: () => fetchProfile(page),
    staleTime,
  });

  return { userProfile: data, refetch };
};

export default useUserProfileQuery;
