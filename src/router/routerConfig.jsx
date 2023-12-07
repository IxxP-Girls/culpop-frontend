import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import MyPage from '../pages/MyPage';
import PopupsPage from '../pages/PopupsPage';
import DetailPage from '../pages/DetailPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ChatPage from '../pages/ChatPage';
import BoardsPage from '../pages/BoardsPage';
import PostPage from '../pages/PostPage';
import BoardPage from '../pages/BoardPage';
import EditPage from '../pages/EditPage';

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
    path: '/boards',
    element: <BoardsPage />,
  },
  {
    path: '/board',
    element: <BoardPage />,
  },
  {
    path: '/post',
    element: <PostPage />,
  },
  {
    path: '/edit',
    element: <EditPage />,
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
    path: '/popup/:id',
    element: <DetailPage />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
]);

export default routerConfig;
