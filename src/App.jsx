import { useState } from 'react';

import { useRequestEditTask, useRequestGetTasks } from './hooks';
import { useRequestAddTask } from './hooks';
import { useRequestDeleteTask } from './hooks';

import { Header } from './components/header';
import { TaskList } from './components/taskList';
import { Form } from './components/form';
import './index.css';

export const App = () => {
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
	const { requestDeleteTask } = useRequestDeleteTask(refreshTasks, setRefreshTasks);
	const { requestEditTask } = useRequestEditTask(refreshTasks, setRefreshTasks);

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
				requestEditTask={requestEditTask}
				requestDeleteTask={requestDeleteTask}
				tasks={tasks}
				isLoading={isLoading}
				searchValue={searchValue}
			/>
		</div>
	);
};
