import React, { Component } from 'react';
import {gregorian_to_jalali, jalali_to_gregorian} from './../lib/changeDate';
const datePickerDays = ( props ) => {
  const nameOfDays = [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
  ];
  const shortNameDay = [
    'ش',
    'یک',
    'دو',
    'سه',
    'چهار',
    'پنج',
    'ج',
  ];
  const firstDayNameofMonth = () => {
    return new Date( props.currentYear, props.currentMonth, 1 ).getDay();
  };
  const lastDayNameofMonth = () => {
    return new Date( props.currentYear, props.currentMonth, daysMonths ).getDay();
  };
  const isLeap = ( year ) => {
    const r = year % 33;
    return ( r === 1 || r === 5 || r === 9 || r === 13 || r === 17 || r === 22 || r === 26 || r === 30 );
  };
  const daysMonths = () => {
    return [ 31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, isLeap( props.currentYear ) ? 30 : 29 ][ props.currentMonth - 1 ];

  };
  const dayNames = shortNameDay.map( ( dayName, index ) => {
    return (
      <li
        className="day-Names"
        key={ index }
      >{ dayName }</li>
    );
  } );
  const dayInMonth = [];
  console.log( firstDayNameofMonth() )
  for ( let i = firstDayNameofMonth(); i >= 0; i-- ) {
    dayInMonth.push(
      <li
        key={ 'lastMonth' + i.toString() }
      ></li>
    );
  };
  for ( let i = 1; i <= daysMonths(); i++ ) {
    dayInMonth.push(
      <li
        key={ 'currentMonth' + i.toString() }
      >{ i }</li>
    );
  };
  console.log(lastDayNameofMonth())
  for ( let i = lastDayNameofMonth(); i <= 6; i++ ) {
    dayInMonth.push(
      <li
        key={ 'NextMonth' + i.toString() }
      >{ i }</li>
    );
  };
  return (
    <div className="d">
      <ul className="pick-day">
        { dayNames }
      </ul>
      <ul className="pick-day">
        { dayInMonth }
      </ul>
    </div>
  );
};
export default datePickerDays;