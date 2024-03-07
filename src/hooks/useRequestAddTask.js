import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useRequestAddTask = (inputTask) => {
	const requestAddTask = () => {
		const tasksDbRef = ref(db, 'tasks');

		push(tasksDbRef, {
			name: inputTask,
		});
	};

	return { requestAddTask };
};
