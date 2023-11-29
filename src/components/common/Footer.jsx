import { ActionIcon, Flex } from '@mantine/core';
import { TbListSearch, TbUser, TbUserHeart, TbHome, TbSend } from 'react-icons/tb';
import { FaRegRectangleList } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Flex justify={'center'} h={'100%'} align={'center'} bg={'dark.6'}>
      <Flex w={960} justify={'space-between'} px={20}>
        <ActionIcon variant="transparent" color="dark.0">
          <TbHome size={30} onClick={() => navigate('/')} />
        </ActionIcon>
        <ActionIcon variant="transparent" color="dark.0">
          <FaRegRectangleList size={30} />
        </ActionIcon>
        <ActionIcon variant="transparent" color="dark.0">
          <TbSend size={30} />
        </ActionIcon>
        <ActionIcon variant="transparent" color="dark.0">
          <TbListSearch size={30} />
        </ActionIcon>
        <ActionIcon variant="transparent" color="dark.0">
          <TbUserHeart size={30} onClick={() => navigate('/mypage')} />
        </ActionIcon>
      </Flex>
    </Flex>
  );
};

export default Footer;
