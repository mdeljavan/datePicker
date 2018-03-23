import React from 'react';
import JalaliDate from './../lib/JalaliDate';
import { gregorian_to_jalali, jalali_to_gregorian } from './../lib/changeDate';
const datePickerDays = (props) => {
  const nameOfDays = [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
  ];
  const shortNameOfDay = [
    'ش',
    'یک',
    'دو',
    'سه',
    'چهار',
    'پنج',
    'ج',
  ];
  const firstDayNameofMonth = () => {
    console.log(props)
    return new JalaliDate(props.currentYear, props.currentMonth+1 , 1).getDay();
  };
  const lastDayNameofMonth = () => {
    return new JalaliDate(props.currentYear, props.currentMonth + 1, daysMonths()).getDay();
  };
  const isLeap = (year) => {
    const r = year % 33;
    return (r === 1 || r === 5 || r === 9 || r === 13 || r === 17 || r === 22 || r === 26 || r === 30);
  };
  const daysMonths = (month = props.currentMonth - 1) => {
    if (month < 0) {
      month = 11;
    } else if (month > 11) {
      month = 0;
    }
    return [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, isLeap(props.currentYear) ? 30 : 29][month];

  };
  const dayNames = shortNameOfDay.map((dayName, index) => {
    return (
      <li
        className="day-Names"
        key={index}
      >{dayName}</li>
    );
  });
  const dayInMonth = [];
  for (let i = firstDayNameofMonth(), counter = 0; i >= 0; i--) {
    counter++;
    dayInMonth.push(
      <li
        key={'lastMonth' + i.toString()}
      >{daysMonths(props.currentMonth - 2) - i}</li>
    );
  };
  for (let i = 1; i <= daysMonths(); i++) {
    dayInMonth.push(
      <li
        key={'currentMonth' + i.toString()}
      >{i}</li>
    );
  };
  const dayArrLength = 42 - dayInMonth.length;
  for (let i = 1; i <= dayArrLength; i++) {
    dayInMonth.push(
      <li
        key={'NextMonth' + i.toString()}
      >{i}</li>
    );
  };
  return (
    <div className="d">
      <ul className="pick-day">
        {dayNames}
      </ul>
      <ul className="pick-day">
        {dayInMonth}
      </ul>
    </div>
  );
};
export default datePickerDays;