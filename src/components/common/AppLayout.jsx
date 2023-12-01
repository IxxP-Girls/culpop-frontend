import { Flex, AppShell, AppShellMain, AppShellHeader, AppShellFooter } from '@mantine/core';
import Footer from './Footer';
import Header from './Header';
import { FooterHeight, HeaderHeight } from '../../constants/heights';

const AppLayout = ({ children }) => {
  return (
    <AppShell header={{ height: HeaderHeight }} footer={{ height: FooterHeight }}>
      <AppShellHeader withBorder={false}>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Flex justify={'center'}>
          <Flex w={960}>{children}</Flex>
        </Flex>
      </AppShellMain>
      <AppShellFooter>
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
};

export default AppLayout;
