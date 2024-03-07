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
	const [isSorted, setIsSorted] = useState(false);

	const { tasks, isLoading } = useRequestGetTasks(isSorted);
	const { requestAddTask } = useRequestAddTask(inputTask);
	const { requestDeleteTask } = useRequestDeleteTask();
	const { requestEditTask } = useRequestEditTask();

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
				requestEditTask={requestEditTask}
				requestDeleteTask={requestDeleteTask}
				tasks={tasks}
				isLoading={isLoading}
				searchValue={searchValue}
			/>
		</div>
	);
};
