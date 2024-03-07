import { useSuspenseQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atom/userState';
import { fetchProfile } from '../../api/user';

const staleTime = 1000 * 3;

interface postListProps {
  postId: number;
  title: string;
  cateName: string;
  createdAt: number;
}

interface userProfileProps {
  username: string;
  email: string;
  postList: postListProps[];
}

const useUserProfileQuery = () => {
  const email = useRecoilValue(userState);

  const query = useSuspenseQuery({
    queryKey: ['@UserProfile', email],
    queryFn: fetchProfile,
    staleTime,
  });

  return { ...query, userProfile: query.data as userProfileProps };
};

export default useUserProfileQuery;
