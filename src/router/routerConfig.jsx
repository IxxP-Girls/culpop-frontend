import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import MyPage from '../pages/MyPage';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
]);

export default routerConfig;
