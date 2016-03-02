import React from 'react';
import DayNames from './CalendarDayNames';
import RestCalendarWeek from './CalendarWeek';
import styles from '../styles/calendar/calendar.css';
import moment from 'moment';

export default class RestCalendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			month: this.props.selected ? this.props.selected.clone() : moment().startOf('day').clone(),
			selected: null,
		};
		this.onClickPrevious = this.onClickPrevious.bind(this);
		this.onClickNext = this.onClickNext.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.renderMonthLabel = this.renderMonthLabel.bind(this);
		this.renderCalendar = this.renderCalendar.bind(this);
	}

  onClickPrevious() {
	  let month = this.state.month;
	  month.add(-1, 'M');
	  this.setState({month: month});
  }
  onClickNext() {
	  let month = this.state.month;
	  month.add(1, 'M');
	  this.setState({month: month});
  }
  onSelect(day) {
  	this.setState({selected: day.date});
  	this.handleResetTimeout();
  }
  renderCalendar() {
		let weeks = [];
		let done = false;
		let date = this.state.month.clone().startOf('month').day('Sunday'); 
		/*removed: .add(-1, 'w')*/
		let monthIndex = date.month();
		let count = 0;
		while (!done) {
			weeks.push(
				<RestCalendarWeek
					key={date.toString()} 
					date={date.clone()} 
					month={this.state.month}
					onSelect={this.onSelect} 
					selected={this.state.selected} />);
			date.add(1, 'w');
			done = count++ > 2 && monthIndex !== date.month();
			monthIndex = date.month();
		}
		return (
			<div className={styles.calendarContainer}>
				<DayNames />
				{weeks}
			</div>
		);
	}
	renderMonthLabel() {
		return (
			<span className={styles.monthLabel}>
				{this.state.month.format('MMM YYYY')}
			</span>
		);
	}
  render() {
		return (
			<div className={styles.restCalendarShadowBox}>
				<div className={styles.calendarHeader}>
					<div className={styles.calendarNavbar}>
						<div className={styles.calendarPageToggle}>
							<button className={styles.prevMonthBtn} onClick={this.onClickPrevious}>Previous Month</button>
							<span className={styles.currentMonthLabel}> {this.renderMonthLabel()} </span>
							<button className={styles.nextMonthBtn} onClick={this.onClickNext}>Next Month</button>			
						</div>
					</div>
				</div>
				{ this.renderCalendar() }
			</div>
		);
	} 
}

RestCalendar.propTypes = { 
	selected: React.PropTypes.object
};
