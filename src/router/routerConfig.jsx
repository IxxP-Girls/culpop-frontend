import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
]);

export default routerConfig;
