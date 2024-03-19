import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Root } from './routes/Root';
import ErrorPage from './components/errorPage/ErrorPage';
import { TaskPage } from './routes/taskPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
	{
		path: '/task/:id',
		element: <TaskPage />,
	},
	{
		path: '/404/',
		element: <ErrorPage />,
	},
	{
		path: '*',
		element: <Navigate to="/404" />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
