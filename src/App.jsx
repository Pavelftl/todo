import { useState } from 'react';

import { Header } from './components/header';
import { TaskList } from './components/taskList';
import './index.css';

export const App = () => {
	const [value, setValue] = useState('');

	return (
		<div className="wrapper">
			<Header value={value} setValue={setValue} />
			<TaskList value={value} />
		</div>
	);
};
