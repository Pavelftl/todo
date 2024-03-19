import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FullTask } from '../components';

export const TaskPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [task, setTask] = useState();

	useEffect(() => {
		(async () => {
			try {
				const taskResponse = await fetch(`http://localhost:4000/task/` + id);
				if (!taskResponse.ok) {
					throw new Error('Ошибка при получении задачи');
				}
				const tasks = await taskResponse.json();
				setTask(tasks);
			} catch (error) {
				alert(error);
				navigate('/404');
			}
		})();
	}, [id, navigate]);

	if (!task) {
		return 'Загрузка...';
	}
	return <FullTask task={task} />;
};
