import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import MyPage from '../pages/MyPage';
import PopupsPage from '../pages/PopupsPage';
import DetailPage from '../pages/DetailPage';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
  {
    path: '/popups',
    element: <PopupsPage />,
  },
  {
    path: '/popup',
    element: <DetailPage />,
  },
]);

export default routerConfig;
