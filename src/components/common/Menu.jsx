import { Flex, Text, Drawer, Divider } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Menu = ({ opened, close }) => {
  const navigate = useNavigate();

  const handleMypageClick = () => navigate('/mypage');

  return (
    <Drawer.Root
      opened={opened}
      onClose={close}
      position="top"
      styles={{
        root: {
          '--drawer-justify': 'center',
        },
      }}
      shadow="0 2px green"
      size={'md'}>
      <Drawer.Overlay backgroundOpacity={0} />
      <Drawer.Content w={960} pos="fixed">
        <Drawer.Header>
          <Text fw={800} fz={26} c={'green'} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            CulPop
          </Text>
          <Drawer.CloseButton size={40} variant="transparent" />
        </Drawer.Header>
        <Drawer.Body>
          <Text fw={700} fz={24} py={10} style={{ cursor: 'pointer' }} onClick={() => navigate('/popups')}>
            PopUp
          </Text>
          <Text fw={700} fz={24} py={10} style={{ cursor: 'pointer' }} onClick={() => navigate('/boards')}>
            Board
          </Text>
          <Divider my={20} />
          <Flex gap={10} direction={'column'} py={10}>
            <Text>윤 슬 회원님, 환영합니다.</Text>
            <Text onClick={handleMypageClick} style={{ cursor: 'pointer' }}>
              마이페이지
            </Text>
            <Text style={{ cursor: 'pointer' }}>로그아웃</Text>
          </Flex>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default Menu;
