export const useRequestDeleteTask = (refreshTasks, setRefreshTasks) => {
	const requestDeleteTask = (id) => {
		fetch(`http://localhost:4000/tasks/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then(() => {
				setRefreshTasks(!refreshTasks);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return { requestDeleteTask };
};
