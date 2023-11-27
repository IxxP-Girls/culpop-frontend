import { Flex, Text, Drawer, Button, Divider, Container } from '@mantine/core';
import { GoSearch } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useDisclosure } from '@mantine/hooks';
import Menu from './Menu';

const Header = () => {
  const [openedMenu, { open: openMenu, close: closeMenu }] = useDisclosure(false);

  return (
    <>
      <Flex justify={'center'}>
        <Flex w={960} p={10} justify={'space-between'} h={'100%'} align={'center'}>
          <Text fw={800} fz={26} c={'lime'}>
            CulPop
          </Text>
          <Flex>
            <Button variant="transparent">
              <GoSearch size={25} color="white" />
            </Button>
            <Button onClick={openMenu} variant="transparent">
              <RxHamburgerMenu size={25} color="white" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Menu opened={openedMenu} close={closeMenu} />
    </>
  );
};

export default Header;
