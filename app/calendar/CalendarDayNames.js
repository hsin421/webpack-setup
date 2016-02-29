import React from 'react';
import styles from '../styles/calendar/calendarDayNames.css';

export default class DayNames extends React.Component {
	render() {
		return (
			<div className={styles.dayNamesRow}>
				<span className={styles.dayName}>SUN</span>
				<span className={styles.dayName}>MON</span>
				<span className={styles.dayName}>TUE</span>
				<span className={styles.dayName}>WED</span>
				<span className={styles.dayName}>THU</span>
				<span className={styles.dayName}>FRI</span>
				<span className={styles.dayName}>SAT</span>
			</div>
		);
	}
}
