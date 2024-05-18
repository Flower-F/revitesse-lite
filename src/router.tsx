import { createBrowserRouter } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { ErrorPage } from './pages/ErrorPage';
import { HiPage } from './pages/hi/HiPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/hi/:name',
    element: <HiPage />,
    errorElement: <ErrorPage />,
  },
]);
