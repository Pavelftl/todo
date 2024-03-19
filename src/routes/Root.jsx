import { useState } from 'react';

import { useRequestGetTasks } from '../hooks';
import { useRequestAddTask } from '../hooks';

import '../index.css';
import { Form, Header, TaskList } from '../components';

export const Root = () => {
	const [inputTask, setInputTask] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [refreshTasks, setRefreshTasks] = useState(false);
	const [isSorted, setIsSorted] = useState(false);

	const { tasks, isLoading, error } = useRequestGetTasks(
		searchValue,
		refreshTasks,
		isSorted,
	);
	const { requestAddTask } = useRequestAddTask(inputTask, refreshTasks, setRefreshTasks);

	return (
		<div className="wrapper">
			<Header setSearchValue={setSearchValue} />
			<Form
				requestAddTask={requestAddTask}
				inputTask={inputTask}
				setInputTask={setInputTask}
			/>
			<TaskList
				isSorted={isSorted}
				setIsSorted={setIsSorted}
				error={error}
				tasks={tasks}
				isLoading={isLoading}
				searchValue={searchValue}
			/>
		</div>
	);
};
