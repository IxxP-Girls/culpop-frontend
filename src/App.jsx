import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import routerConfig from './router/routerConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Global } from '@emotion/react';
import GlobalFonts from './styles/GlobalFonts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const theme = createTheme({
  fontFamily: 'Pretendard, sans-serif',
  primaryColor: 'lime',
  colors: {
    dark: ['#fff', '#adadad', '#828282', '#6c6c6c', '#525252', '#404040', '#2c2c2c', '#121212', '#01010A', '#000000'],
  },
});

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Global styles={GlobalFonts} />
          <RouterProvider router={routerConfig} />
        </MantineProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
