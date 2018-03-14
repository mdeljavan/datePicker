import React, { Component } from 'react';
import './App.css';
import DatePickerElements from './Components/DatePickerElements';
import DatePickerDays from './Components/DatePickerDays';
class App extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      currentMonth: new Date().getMonth()+1,
      currentYear: new Date().getFullYear(),
      currentDay : new Date().getDate(),
      currentDayName : new Date().getDay()
    };
  };
  month = [
    {
      name: 'فروردین',
      index: 1

    },
    {
      name: 'اردیبهشت',
      index: 2

    },
    {
      name: 'خرداد',
      index: 3

    },
    {
      name: 'تیر',
      index: 4

    },
    {
      name: 'مرداد',
      index: 5

    },
    {
      name: 'شهریور',
      index: 6

    },
    {
      name: 'مهر',
      index: 7

    },
    {
      name: 'آبان',
      index: 8

    },
    {
      name: 'آذر',
      index: 9

    },
    {
      name: 'دی',
      index: 10

    },
    {
      name: 'بهمن',
      index: 11

    },
    {
      name: 'اسفند',
      index: 12

    }
  ];
  onSetCurrentValues = ( current, type ) => {
    if ( type === 'month' ) {
      this.setState( {
        currentMonth: current
      } )
    } else if ( type === 'year' ) {
      this.setState( {
        currentYear: current
      } )
    }
  }
  render () {
    return (
      <div className="App">
        <div className="picker">
          <DatePickerElements
            type='month'
            min={1}
            max={12}
            current={ this.state.currentMonth }
            setCurrent={ this.onSetCurrentValues } />
          <DatePickerDays
            currentMonth={ this.state.currentMonth }
            currentYear={ this.state.currentYear }
            currentDay={ this.state.currentDay }
            currentDayName={this.state.currentDayName}
          />
          <DatePickerElements
            type='year'
            min={1300}
            max={this.state.currentYear+10}
            current={ this.state.currentYear }
            setCurrent={ this.onSetCurrentValues } />
        </div>
      </div>
    );
  }
}

export default App;