import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import userState from '../../recoil/atom/userState';

const fetchData = async sortOption => {
  const res = await axios.get(`/users/profile/popupLike/${sortOption}`, { withCredentials: true });
  return res.data;
};

const staleTime = 1000 * 3;

const useUserInterestsQuery = sortOption => {
  const email = useRecoilValue(userState);

  const query = useQuery({
    queryKey: ['@UserInterests', email, sortOption],
    queryFn: () => fetchData(sortOption),
    staleTime,
  });

  return { ...query, userInterests: query.data };
};

export default useUserInterestsQuery;
