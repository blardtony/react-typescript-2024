import { type RouteObject, createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Todo from '../../pages/Todo';
import Layout from '../common/Layout';

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
