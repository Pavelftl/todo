export const useRequestEditTask = () => {
	const requestEditTask = (inputValue, id) => {
		fetch(`http://localhost:4000/task/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				name: inputValue,
			}),
		})
			.then((res) => res.json())

			.catch((error) => {
				console.error(error);
			});
	};

	return { requestEditTask };
};
