import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import MyPage from '../pages/MyPage';
import PopupsPage from '../pages/PopupsPage';
import DetailPage from '../pages/DetailPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ChatPage from '../pages/ChatPage';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
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
  {
    path: '/chat',
    element: <ChatPage />,
  },
]);

export default routerConfig;
