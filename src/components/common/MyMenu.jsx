import axios from 'axios';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { Flex, Text } from '@mantine/core';
import userState from '../../recoil/atom/userState';
import isLoginState from '../../recoil/atom/isLoginState';

const MyMenu = ({ navigate }) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const setUser = useSetRecoilState(userState);

  const handleClick = async () => {
    await axios.get('/users/logout', { withCredentials: true });

    setUser(null);
    localStorage.removeItem('userState');
    setIsLogin(false);
  };

  return (
    <Flex gap={10} direction={'column'} py={10}>
      {isLogin ? (
        <>
          <Text>윤 슬 회원님, 환영합니다.</Text>
          <Text onClick={() => navigate('/mypage')} style={{ cursor: 'pointer' }}>
            마이페이지
          </Text>
          <Text style={{ cursor: 'pointer' }} onClick={handleClick}>
            로그아웃
          </Text>
        </>
      ) : (
        <Text Text style={{ cursor: 'pointer' }} onClick={() => navigate('/signin')}>
          로그인
        </Text>
      )}
    </Flex>
  );
};

export default MyMenu;
