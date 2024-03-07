import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useRequestEditTask = () => {
	const requestEditTask = (inputValue, id) => {
		const tasksDbRef = ref(db, `tasks/${id}`);
		set(tasksDbRef, {
			name: inputValue,
		});
	};

	return { requestEditTask };
};
