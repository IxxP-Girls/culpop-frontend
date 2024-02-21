import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import userState from '../../recoil/atom/userState';
import { fetchProfile } from '../../api/user';

const staleTime = 1000 * 3;

const useUserProfileQuery = () => {
  const email = useRecoilValue(userState);

  const query = useQuery({
    queryKey: ['@UserProfile', email],
    queryFn: fetchProfile,
    staleTime,
  });

  return { ...query, userProfile: query.data };
};

export default useUserProfileQuery;
