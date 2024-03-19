/* eslint-disable react/prop-types */
import styles from './Task.module.scss';

export const Task = ({ name }) => {
	return (
		<li>
			<div className={styles.item}>
				<div className={styles.content}>
					<div className={styles.inner}>
						<p className={styles.text}>{name}</p>
					</div>
				</div>
			</div>
		</li>
	);
};
