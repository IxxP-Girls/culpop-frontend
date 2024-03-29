import { Flex, Text, ActionIcon } from '@mantine/core';
import { GoSearch } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useDisclosure } from '@mantine/hooks';
import Menu from './Menu';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const [openedMenu, { open: openMenu, close: closeMenu }] = useDisclosure(false);
  const [openedSearch, { open: openSearch, close: closeSearch }] = useDisclosure(false);

  return (
    <>
      <Flex justify={'center'}>
        <Flex w={960} p={10} justify={'space-between'} h={'100%'} align={'center'}>
          <Text fw={800} fz={26} c={'green'} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            CulPop
          </Text>
          <Flex>
            <ActionIcon onClick={openSearch} variant="transparent" p={0} mr={10}>
              <GoSearch size={25} color="white" />
            </ActionIcon>
            <ActionIcon onClick={openMenu} variant="transparent" p={0} ml={10}>
              <RxHamburgerMenu size={25} color="white" />
            </ActionIcon>
          </Flex>
        </Flex>
      </Flex>
      <Menu opened={openedMenu} close={closeMenu} />
      <SearchBar opened={openedSearch} close={closeSearch} />
    </>
  );
};

export default Header;
