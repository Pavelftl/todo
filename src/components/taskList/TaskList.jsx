/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import styles from './TaskList.module.scss';
import { Task } from '../task/Task';

export const TaskList = ({
	tasks,
	error,
	isLoading,
	isSorted,
	setIsSorted,
	searchValue,
}) => {
	return (
		<div className={styles.container}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<div className={styles.todo}>
					{error ? (
						<p className={styles.error}>{error}</p>
					) : (
						<div>
							{searchValue ? (
								<p className={styles.text}>Поиск по запросу: {searchValue} </p>
							) : (
								<div className={styles.title}>
									<p> {tasks.length} задач осталось</p>
									<svg
										onClick={() => setIsSorted(!isSorted)}
										fill={!isSorted ? '#8b939b' : '#000000'}
										height="20"
										viewBox="0 0 1792 1792"
										width="20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z" />
									</svg>
								</div>
							)}
							{tasks.length === 0 ? (
								<p className={styles.error}>Список задач пуст</p>
							) : (
								<ul>
									{tasks.map((task) => (
										<Link key={task.id} to={`/task/${task.id}`}>
											<Task {...task} />
										</Link>
									))}
								</ul>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
};
