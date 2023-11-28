import { Flex, Text, Drawer, Divider } from '@mantine/core';

const Menu = ({ opened, close }) => {
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
      shadow="0 2px lime"
      size={'md'}>
      <Drawer.Overlay backgroundOpacity={0} />
      <Drawer.Content w={960} pos="fixed">
        <Drawer.Header>
          <Text fw={800} fz={26} c={'lime'}>
            CulPop
          </Text>
          <Drawer.CloseButton size={40} variant="transparent" />
        </Drawer.Header>
        <Drawer.Body>
          <Text fw={700} fz={24} py={10}>
            PopUp
          </Text>
          <Text fw={700} fz={24} py={10}>
            Culture
          </Text>
          <Text fw={700} fz={24} py={10}>
            Board
          </Text>
          <Divider my={20} />
          <Flex gap={10} direction={'column'} py={10}>
            <Text>윤 슬 회원님, 환영합니다.</Text>
            <Text>마이페이지</Text>
            <Text>로그아웃</Text>
          </Flex>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default Menu;
