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
import AuthenticationGuard from '../guard/guard';

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
    element: (
      <Suspense fallback={<span>isLoading...</span>}>
        <BoardsPage />
      </Suspense>
    ),
  },
  {
    path: '/post',
    element: (
      <Suspense fallback={<span>isLoading...</span>}>
        <PostPage />
      </Suspense>
    ),
  },
  {
    path: '/createpost',
    element: <CreatePostPage />,
  },
  {
    path: '/edit',
    element: <AuthenticationGuard redirectTo="/signin" element={<EditPage />} />,
  },
  {
    path: '/mypage',
    element: (
      <AuthenticationGuard
        redirectTo="/signin"
        element={
          <Suspense fallback={<span>isLoading...</span>}>
            <MyPage />
          </Suspense>
        }
      />
    ),
  },
  {
    path: '/popups/:name',
    element: (
      <Suspense fallback={<span>isLoading...</span>}>
        <PopupsPage />
      </Suspense>
    ),
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
    element: <AuthenticationGuard redirectTo="/signin" element={<ChatPage />} />,
  },
]);

export default routerConfig;
