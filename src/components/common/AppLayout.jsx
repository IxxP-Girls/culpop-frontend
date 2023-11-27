import { Flex, AppShell, AppShellMain, AppShellHeader, AppShellFooter } from '@mantine/core';
import Footer from './Footer';

import Header from './Header';

const AppLayout = ({ children }) => {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 62 }}>
      <AppShellHeader withBorder={false}>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Flex justify={'center'}>{children}</Flex>
      </AppShellMain>
      <AppShellFooter>
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
};

export default AppLayout;
