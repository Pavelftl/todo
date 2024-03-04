/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Task.module.scss';

export const Task = ({ title }) => {
	const [isCheck, setIsCheck] = useState(false);
	return (
		<li>
			<div className={styles.item}>
				<div className={styles.content}>
					<input
						onChange={() => setIsCheck(!isCheck)}
						type="checkbox"
						checked={isCheck}
					/>
					<span className={`${styles.text} ${isCheck ? styles.checked : ''}`}>
						{title}
					</span>
				</div>
			</div>
		</li>
	);
};
