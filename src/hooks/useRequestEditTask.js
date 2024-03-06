export const useRequestEditTask = (refreshTasks, setRefreshTasks) => {
	const requestEditTask = (inputValue, id) => {
		fetch(`http://localhost:4000/tasks/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				name: inputValue,
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

	return { requestEditTask };
};
