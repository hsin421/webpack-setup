import React from 'react';
import styles from '../styles/calendar/calendarWeeks.css';
import moment from 'moment';

export default class RestCalendarWeek extends React.Component {
constructor(props, context) {
	super(props, context);
}
render() {
	let days = [];
	let { date, month, rooms, bookings, selected, mobile } = this.props;

	for (let i = 0; i < 7; i++) {
		let day = {
			name: date.format('dd').substring(0, 1),
			number: date.date(),
			isCurrentMonth: date.month() === month.month(),
			isToday: date.isSame(new Date(), 'day'),
			isBeforeToday: date.isBefore(new Date(), 'day'),
			date: date
		};

		let style;
		if (day.isToday) {
			style = {border: '1px solid #ff8133'};
		}
		if (day.date.isSame(selected)) {
			style = {border: '1px solid #ff8133', zIndex: '500', opacity: '1', transition: 'all 0.3s ease-out'};
		}

			days.push(
				<div 
					key={day.date.toString()} 
					className={!day.isBeforeToday ? styles.activeDay : styles.inactiveDay} 
					style={style}
					onClick={this.props.onSelect.bind(null, day)}
					onMouseLeave={this.props.onMouseLeave} >
					<span className={styles.borderEffect} style={(day.date.isSame(selected) && !day.isBeforeToday) ? {borderColor: '#ff8133'} : null}/>
						<div className={styles.header}>
							<span className={styles.monthLabel}>{ day.number === 1 ? date.format('MMM') : null }</span> {day.number}
							<span className={styles.dayToday}>
							{ day.isToday ? ' TODAY' : null }
							</span>
						</div>
				</div>
			);
			date = date.clone();
			date.add(1, 'd');
		}

	return (
		<div className={styles.week} key={days[0].toString()}>
			{days}
		</div>
	);
}
}

RestCalendarWeek.propTypes = {
	date: React.PropTypes.object, 
	month: React.PropTypes.object, 
	selected: React.PropTypes.object, 
	onSelect: React.PropTypes.func
};
