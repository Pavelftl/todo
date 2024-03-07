import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useRequestGetTasks = (isSorted) => {
	const [tasks, setTasks] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const tasksDbRef = ref(db, 'tasks');

		return onValue(tasksDbRef, (snapshot) => {
			let loadedTasks = snapshot.val();

			if (isSorted) {
				const tasksArray = Object.entries(loadedTasks);

				tasksArray.sort(([, taskA], [, taskB]) => taskA.name.localeCompare(taskB.name));

				loadedTasks = Object.fromEntries(tasksArray);
			}
			setTasks(loadedTasks);
			setIsLoading(false);
		});
	}, [isSorted]);

	return { tasks, isLoading };
};

// Пытался сделать фильтрацию через запрос к базе данных, используя orderByChild, но не получилось.

// export const useRequestGetTasks = (isSorted) => {
// 	const [tasks, setTasks] = useState({});
// 	const [isLoading, setIsLoading] = useState(true);

// 	useEffect(() => {
// 		const tasksDbRef = ref(db, 'tasks');

// 		if (isSorted) {
// 			const filteredTasksDbRef = query(ref(db, 'tasks'), orderByChild('name'));
// 			return onValue(filteredTasksDbRef, (snapshot) => {
// 				const loadedTasks = snapshot.val();
// 				setTasks(loadedTasks);
// 				setIsLoading(false);
// 			});
// 		} else {
// 			return onValue(tasksDbRef, (snapshot) => {
// 				const loadedTasks = snapshot.val();
// 				setTasks(loadedTasks);
// 				setIsLoading(false);
// 			});
// 		}
// 	}, [isSorted]);

// 	return { tasks, isLoading };
// };
