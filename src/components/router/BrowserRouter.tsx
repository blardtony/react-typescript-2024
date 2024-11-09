import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from '../common/Layout';
import Home from '../../pages/Home';
import Todo from '../../pages/Todo';

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'todo',
        element: <Todo />,
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(router);
