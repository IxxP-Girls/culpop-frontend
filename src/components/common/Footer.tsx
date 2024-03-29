import { ActionIcon, Flex } from '@mantine/core';
import { TbListSearch, TbUser, TbUserHeart, TbHome, TbSend } from 'react-icons/tb';
import { FaRegRectangleList } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Flex justify={'center'} h={'100%'} align={'center'} bg={'dark.6'}>
      <Flex w={960} justify={'space-between'} px={20}>
        <ActionIcon variant="transparent" color="dark.0" onClick={() => navigate('/')}>
          <TbHome size={30} />
        </ActionIcon>
        <ActionIcon variant="transparent" color="dark.0" onClick={() => navigate('/boards')}>
          <FaRegRectangleList size={30} />
        </ActionIcon>
        <ActionIcon variant="transparent" color="dark.0" onClick={() => navigate('/chat')}>
          <TbSend size={30} />
        </ActionIcon>
        <ActionIcon variant="transparent" color="dark.0" onClick={() => navigate('/popups/list')}>
          <TbListSearch size={30} />
        </ActionIcon>
        <ActionIcon variant="transparent" color="dark.0" onClick={() => navigate('/mypage')}>
          <TbUserHeart size={30} />
        </ActionIcon>
      </Flex>
    </Flex>
  );
};

export default Footer;
