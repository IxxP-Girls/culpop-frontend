import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState, isLoginState } from '../../recoil/atom';
import { checkVerify } from '../../api/user';

const useAuthenticationQuery = () => {
  const setUserId = useSetRecoilState(userState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const { isSuccess, isFetched, data } = useQuery({
    queryKey: ['@Authenticated'],
    queryFn: () => checkVerify(),
    staleTime: 1000,
    retry: false,
  });

  console.log(data);

  useEffect(() => {
    if (isSuccess && !data.isLogin) {
      setUserId(null);
      setIsLogin(data.isLogin);
    }

    if (isSuccess && data.isLogin) {
      setIsLogin(data.isLogin);
    }
  }, [data, isSuccess, setIsLogin, setUserId]);

  return { isFetched, isLogin };
};

export default useAuthenticationQuery;
