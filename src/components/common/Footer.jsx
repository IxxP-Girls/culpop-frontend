import { Flex } from '@mantine/core';
import { GoHome, GoHeart, GoPaperAirplane, GoSearch, GoPerson } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import tabState from '../../recoil/atom/tabState';

const Footer = () => {
  const navigate = useNavigate();
  const setSelectTab = useSetRecoilState(tabState);

  const handleMypageClick = tab => {
    setSelectTab(tab);
    navigate('/mypage');
  };

  return (
    <Flex justify={'center'} h={'100%'} align={'center'} bg={'dark.6'}>
      <Flex w={960} justify={'space-between'}>
        <GoHome size={25} onClick={() => navigate('/')} />
        <GoHeart size={25} onClick={() => handleMypageClick('interests')} />
        <GoPaperAirplane size={25} />
        <GoSearch size={25} />
        <GoPerson size={25} onClick={() => handleMypageClick('info')} />
      </Flex>
    </Flex>
  );
};

export default Footer;
