import React from 'react';
import styles from './spinner.module.scss';

export default function Spinner() {
	return (
		<div className={styles.skCubeGrid}>
			<div className={styles.skCube1}></div>
			<div className={styles.skCube2}></div>
			<div className={styles.skCube3}></div>
			<div className={styles.skCube4}></div>
			<div className={styles.skCube5}></div>
			<div className={styles.skCube6}></div>
			<div className={styles.skCube7}></div>
			<div className={styles.skCube8}></div>
			<div className={styles.skCube9}></div>
		</div>
	);
}
