import { Flex, Text, Button } from '@mantine/core';
import { GoSearch } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useDisclosure } from '@mantine/hooks';
import Menu from './Menu';
import SearchBar from './SearchBar';

const Header = () => {
  const [openedMenu, { open: openMenu, close: closeMenu }] = useDisclosure(false);
  const [openedSearch, { open: openSearch, close: closeSearch }] = useDisclosure(false);

  return (
    <>
      <Flex justify={'center'}>
        <Flex w={960} p={10} justify={'space-between'} h={'100%'} align={'center'}>
          <Text fw={800} fz={26} c={'lime'}>
            CulPop
          </Text>
          <Flex>
            <Button onClick={openSearch} variant="transparent">
              <GoSearch size={25} color="white" />
            </Button>
            <Button onClick={openMenu} variant="transparent">
              <RxHamburgerMenu size={25} color="white" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Menu opened={openedMenu} close={closeMenu} />
      <SearchBar opened={openedSearch} close={closeSearch} />
    </>
  );
};

export default Header;
