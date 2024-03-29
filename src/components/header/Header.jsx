/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Header.module.scss';
import { useRef } from 'react';
import { useEffect } from 'react';

export const Header = ({ value, setValue }) => {
	const [isOpen, setIsOpen] = useState(false);

	const inputRef = useRef();
	const searchRef = useRef();

	const onClickShow = () => {
		setIsOpen(!isOpen);
		inputRef.current.focus();
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.composedPath().includes(searchRef.current)) {
				setIsOpen(false);
			}
		};

		document.body.addEventListener('click', handleClickOutside);
		return () => {
			document.body.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div className={styles.header}>
			<h1>Мои задачи</h1>
			<div ref={searchRef} className={styles.search}>
				<div className={`${styles.field}  ${isOpen ? styles.showField : null}`}>
					<svg
						className={styles.searchIcon}
						fill="none"
						height="24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="11" cy="11" r="8" />
						<line x1="21" x2="16.65" y1="21" y2="16.65" />
					</svg>
					<input
						ref={inputRef}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						type="text"
						placeholder="Поиск..."
					/>
					{value && (
						<svg
							onClick={() => setValue('')}
							className={styles.closeIcon}
							data-name="Layer 1"
							id="Layer_1"
							viewBox="0 0 512 512"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title />
							<path d="M464.34,255.6C463.15,168.9,410.08,91.28,328.8,60.29,247,29.1,150.46,55.11,95.1,122.8,40,190.16,31.66,287.19,76.54,362.29c44.78,74.95,132.57,113.56,218.08,98.17,97.48-17.54,167.27-105.12,169.64-202.63C464.32,257.11,464.35,256.37,464.34,255.6ZM314,416.09c-67.8,24.3-144.8,3.05-190.53-52.58C78.37,308.64,73,228.85,109.28,168.05c36.11-60.43,108.4-93.57,177.79-80.29C367.74,103.21,425.3,174,426.42,255.6,425.45,326.61,381.57,391.87,314,416.09Z" />
							<path d="M309.41,175.16l-53.63,53.63-53.63-53.63c-17.28-17.28-44.1,9.53-26.81,26.81L229,255.6l-53.63,53.63c-17.28,17.28,9.52,44.1,26.81,26.81l53.63-53.63L309.4,336c17.28,17.27,44.1-9.53,26.82-26.82L282.59,255.6,336.22,202C353.5,184.69,326.69,157.87,309.41,175.16Z" />
						</svg>
					)}
				</div>
				<button onClick={onClickShow}>Поиск</button>
			</div>
		</div>
	);
};
