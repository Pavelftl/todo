import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const useRequestDeleteTask = () => {
	const requestDeleteTask = (id) => {
		const tasksDbRef = ref(db, `tasks/${id}`);
		remove(tasksDbRef);
	};

	return { requestDeleteTask };
};
