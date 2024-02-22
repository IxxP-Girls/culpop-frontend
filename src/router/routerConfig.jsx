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
import CreatePostPage from '../pages/CreatePostPage';
import EditPage from '../pages/EditPage';
import { Suspense } from 'react';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<span>isLoading...</span>}>
        <RootPage />
      </Suspense>
    ),
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
    path: '/post',
    element: <PostPage />,
  },
  {
    path: '/createpost',
    element: <CreatePostPage />,
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
    element: (
      <Suspense fallback={<span>isLoading...</span>}>
        <DetailPage />
      </Suspense>
    ),
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
]);

export default routerConfig;
