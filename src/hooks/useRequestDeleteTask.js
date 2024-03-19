export const useRequestDeleteTask = () => {
	const requestDeleteTask = (id) => {
		fetch(`http://localhost:4000/task/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())

			.catch((error) => {
				console.error(error);
			});
	};

	return { requestDeleteTask };
};
