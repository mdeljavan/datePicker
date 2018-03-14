import React, { Component } from 'react';

// class DatePickerDays extends Component {
//   nameOfDays = [
//     'شنبه',
//     'یکشنبه',
//     'دوشنبه',
//     'سه شنبه',
//     'چهارشنبه',
//     'پنجشنبه',
//     'جمعه',
//   ];
//   shortNameDay = [
//     'ش',
//     'یک',
//     'دو',
//     'سه',
//     'چهار',
//     'پنج',
//     'ج',
//   ];
//   state = {
//       currentDay: this.props.currentDay,
//       currentMonth: this.props.currentMonth,
//       currentYear: this.props.currentYear
//     };
//   constructor ( props ) {
//     super( props );
//     // this.state = {
//     //   currentDay: props.currentDay,
//     //   currentMonth: props.currentMonth,
//     //   currentYear: props.currentYear
//     // };
//   };
//   // componentWillUpdate () {
//   //   if ( this.state.currentMonth !== this.props.currentMonth ) {
//   //     this.setState( ( prevState, props ) => {
//   //       return (
//   //         {
//   //           currentMonth:props.currentMonth
//   //         }
//   //       )
//   //     })
//   //   }
//   // }
//   dayNameOfFirstMonth = () => {
//     console.log( this.state )
//     return new Date( this.state.currentYear, this.state.currentMonth, 1 ).getDay();
//   };


//   isLeap = ( year ) => {
//     const r = year % 33;
//     return ( r === 1 || r === 5 || r === 9 || r === 13 || r === 17 || r === 22 || r === 26 || r === 30 );
//   }
//   daysMonths = () => {
//     return [ 31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, this.isLeap( this.state.currentYear ) ? 30 : 29 ][ this.state.currentMonth ];

//   };

//   render () {
//     const dayNames = this.shortNameDay.map( ( dayName, index ) => {
//       return (
//         <li
//           className="day-Names"
//           key={ index }
//         >{ dayName }</li>
//       );
//     } );
//     const dayInMonth = [];
//     for ( let i = this.dayNameOfFirstMonth(); i >= 0; i-- ) {
//       dayInMonth.push(
//         <li
//           key={ Math.random() }
//         // key={ 'lastMonth' + i.toString()}
//         ></li>
//       )
//     }
//     for ( let i = 1; i <= this.daysMonths(); i++ ) {
//       dayInMonth.push(
//         <li
//           key={ Math.random() }
//         // key={ 'currentMonth' + i.toString() }
//         >{ i }</li>
//       )
//     }
//     return (
//       <div className="d">
//         <ul className="pick-day">
//           { dayNames }
//         </ul>
//         <ul className="pick-day">
//           { dayInMonth }
//         </ul>
//       </div>
//     )
//   }


// };
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
  const dayNameOfFirstMonth = () => {
    return new Date( props.currentYear, props.currentMonth+1, 1 ).getDay();
  };


  const isLeap = ( year ) => {
    const r = year % 33;
    return ( r === 1 || r === 5 || r === 9 || r === 13 || r === 17 || r === 22 || r === 26 || r === 30 );
  }
  const daysMonths = () => {
    return [ 31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, isLeap( props.currentYear ) ? 30 : 29 ][ props.currentMonth-1];

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
  for ( let i = dayNameOfFirstMonth(); i >= 0; i-- ) {
  
    dayInMonth.push(
      <li
        // key={ Math.random() }
      key={ 'lastMonth' + i.toString()}
      ></li>
    )
  }
  for ( let i = 1; i <= daysMonths(); i++ ) {
    dayInMonth.push(
      <li
        // key={ Math.random() }
      key={ 'currentMonth' + i.toString() }
      >{ i }</li>
    )
  }
  return (
    <div className="d">
      <ul className="pick-day">
        { dayNames }
      </ul>
      <ul className="pick-day">
        { dayInMonth }
      </ul>
    </div>
  )
}
export default datePickerDays;