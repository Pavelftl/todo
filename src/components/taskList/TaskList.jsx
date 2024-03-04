/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Task } from '../task/';
import styles from './TaskList.module.scss';

export const TaskList = ({ value }) => {
	const [tasks, setTasks] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const taskResponse = await fetch('https://jsonplaceholder.typicode.com/todos/');
			const tasks = await taskResponse.json();
			setTasks(tasks);
			setIsLoading(false);
		})();
	}, []);

	return (
		<>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<div className={styles.todo}>
					{value ? (
						<p className={styles.text}>Поиск по запросу: {value} </p>
					) : (
						<div className={styles.title}>
							<p> {tasks.length} задач осталось</p>
						</div>
					)}
					<ul>
						{tasks
							.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
							.map((task) => (
								<Task key={task.id} {...task} />
							))}
					</ul>
				</div>
			)}
		</>
	);
};
