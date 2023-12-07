import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import userState from '../../recoil/atom/userState';

const fetchData = async () => {
  const { data } = await axios.get(`/users/profile`, { withCredentials: true });
  return data;
};

const staleTime = 1000 * 3;

const useUserProfileQuery = () => {
  const email = useRecoilValue(userState);

  const query = useQuery({
    queryKey: ['@UserProfile', email],
    queryFn: fetchData,
    staleTime,
  });

  return { ...query, userProfile: query.data };
};

export default useUserProfileQuery;
