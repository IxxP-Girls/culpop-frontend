import { Flex } from '@mantine/core';
import { GoHome, GoHeart, GoPaperAirplane, GoSearch, GoPerson } from 'react-icons/go';

const Footer = () => {
  return (
    <Flex justify={'center'} h={'100%'} align={'center'} bg={'dark.6'}>
      <Flex w={960} justify={'space-between'}>
        <GoHome size={25} />
        <GoHeart size={25} />
        <GoPaperAirplane size={25} />
        <GoSearch size={25} />
        <GoPerson size={25} />
      </Flex>
    </Flex>
  );
};

export default Footer;
