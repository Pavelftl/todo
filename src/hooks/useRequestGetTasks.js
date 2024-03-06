import { useEffect, useState } from 'react';

export const useRequestGetTasks = (searchValue, refreshTasks, isSorted) => {
	const [tasks, setTasks] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const search = searchValue ? `q=${searchValue}` : '';
		const sort = isSorted ? `_sort=name&_order=asc` : '';
		(async () => {
			try {
				const taskResponse = await fetch(`http://localhost:4000/tasks?${search}${sort}`);
				const tasks = await taskResponse.json();
				setTasks(tasks);
			} catch (error) {
				setError(
					'Ошибка запроса к серверу. Попробуйте ввести команду в терминале: "json-server --watch ./src/db.json --port 4000"',
				);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [setError, searchValue, refreshTasks, isSorted]);

	return { tasks, isLoading, error };
};
