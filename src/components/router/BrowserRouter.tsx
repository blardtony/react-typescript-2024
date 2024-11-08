import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from '../common/Layout';
import Home from '../../pages/Home';

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(router);
