import React, { Component } from 'react';
import './App.css';
import DatePickerElements from './Components/DatePickerElements';
class App extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear()
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

  render () {
    return (
      <div className="App">
        <div className="picker">
          <DatePickerElements
            type='month'
            min='1'
            max='12'
            current={ this.state.currentMonth } />
          <DatePickerElements
            type='year'
            min='1970'
            max='2030'
            current={ this.state.currentYear } />
        </div>
      </div>
    );
  }
}

export default App;