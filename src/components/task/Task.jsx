/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import styles from './Task.module.scss';

export const Task = ({ name, id, requestDeleteTask, requestEditTask }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [inputValue, setInputValue] = useState(name);

	const inputRef = useRef();

	const onClickShow = () => {
		setIsEditing(true);
		inputRef.current.focus();
	};

	const onClickClose = () => {
		requestEditTask(inputValue, id);
		setIsEditing(false);
	};

	const setUpdate = (updatedValue) => {
		setInputValue(updatedValue);
	};

	const onKeyClose = (event) => {
		if (event.key === 'Enter') {
			requestEditTask(inputValue, id);
			setIsEditing(false);
		}
	};

	return (
		<li>
			<div className={styles.item}>
				<div className={styles.content}>
					<input
						onKeyDown={onKeyClose}
						ref={inputRef}
						value={inputValue}
						onChange={(e) => setUpdate(e.target.value)}
						type="text"
						className={`${styles.input} ${isEditing ? styles.active : null}`}
					/>

					<div className={styles.inner}>
						<span className={styles.text}>{name}</span>
					</div>

					<div className={styles.settings}>
						{isEditing ? (
							<svg
								onClick={onClickClose}
								className={styles.checkmark}
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 24 24"
							>
								<path d="M10.5,14.7928932 L17.1464466,8.14644661 C17.3417088,7.95118446 17.6582912,7.95118446 17.8535534,8.14644661 C18.0488155,8.34170876 18.0488155,8.65829124 17.8535534,8.85355339 L10.8535534,15.8535534 C10.6582912,16.0488155 10.3417088,16.0488155 10.1464466,15.8535534 L7.14644661,12.8535534 C6.95118446,12.6582912 6.95118446,12.3417088 7.14644661,12.1464466 C7.34170876,11.9511845 7.65829124,11.9511845 7.85355339,12.1464466 L10.5,14.7928932 Z" />
							</svg>
						) : (
							<svg
								onClick={onClickShow}
								className={styles.editIcon}
								enableBackground="new 0 0 64 64"
								height="64px"
								id="Layer_1"
								version="1.1"
								viewBox="0 0 64 64"
								width="64px"
								xmlSpace="preserve"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g>
									<path d="M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z" />
									<polygon points="21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  " />
									<polygon points="20.273,37.028 18.642,46.28 27.913,44.654  " />
									<path d="M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z" />
								</g>
							</svg>
						)}
						{!isEditing && (
							<svg
								onClick={() => requestDeleteTask(id)}
								className={styles.deleteIcon}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M22,5H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V5H2A1,1,0,0,0,2,7H3.061L4,22.063A1,1,0,0,0,5,23H19a1,1,0,0,0,1-.937L20.939,7H22a1,1,0,0,0,0-2ZM9,3h6V5H9Zm9.061,18H5.939L5.064,7H18.936ZM9,11v6a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Zm4,0v6a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Zm3-1a1,1,0,0,1,1,1v6a1,1,0,0,1-2,0V11A1,1,0,0,1,16,10Z" />
							</svg>
						)}
					</div>
				</div>
			</div>
		</li>
	);
};
