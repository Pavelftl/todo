export const useRequestAddTask = (inputTask, refreshTasks, setRefreshTasks) => {
	const requestAddTask = () => {
		fetch('http://localhost:4000/tasks', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				name: inputTask,
			}),
		})
			.then((res) => res.json())
			.then(() => {
				setRefreshTasks(!refreshTasks);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return { requestAddTask };
};
