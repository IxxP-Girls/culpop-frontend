import { Text, Drawer, Divider } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import MyMenu from './MyMenu';
import { ModalProps } from '../../types/types';

const Menu: React.FC<ModalProps> = ({ opened, close }) => {
  const navigate = useNavigate();

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
          <MyMenu />
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default Menu;
