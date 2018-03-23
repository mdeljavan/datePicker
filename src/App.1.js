import React, { Component } from 'react';
import './App.css';
import DatePickerElements from './Components/DatePickerElements.1';
import DatePickerDays from './Components/DatePickerDays';
import JalaliDate from './lib/JalaliDate';
class App extends Component {
  monthName = [
    {
      value: 'فروردین',
      index: 1

    },
    {
      value: 'اردیبهشت',
      index: 2

    },
    {
      value: 'خرداد',
      index: 3

    },
    {
      value: 'تیر',
      index: 4

    },
    {
      value: 'مرداد',
      index: 5

    },
    {
      value: 'شهریور',
      index: 6

    },
    {
      value: 'مهر',
      index: 7

    },
    {
      value: 'آبان',
      index: 8

    },
    {
      value: 'آذر',
      index: 9

    },
    {
      value: 'دی',
      index: 10

    },
    {
      value: 'بهمن',
      index: 11

    },
    {
      value: 'اسفند',
      index: 12

    }
  ];
  constructor(props) {
    super(props);
    this.state = {
      month: {
        taday: null,
        current: 1,
        min: 1,
        max: 12,
        values: null
      },
      year: {
        today: null,
        current: 1300,
        min: 1350,
        max: 1396 + 10,
        values: null
      },
      currentDay: new Date().getDate(),
      currentDayName: new Date().getDay(),
    };
  };
  onChangeTheDate = (type, index) => {
    const ArrayValues = this.exutableListArray(this.state[type].values, index);
    const values = 'values';
    const current = 'current';
    const newStateElement = {
      ...this.state[type],
      [values]: [
        ...ArrayValues
      ],
      [current]: index
    };
    this.setState({
      [type]: newStateElement
    });
  }
  exutableListArray = (arr, nextIndex) => {
    const arrayDateElement = [...arr];
    const index = nextIndex;
    if (arrayDateElement[0].index === index) {
      const last = arrayDateElement.splice(-1, 1);
      arrayDateElement.splice(0, 0, last[0]);
    } else if (arrayDateElement[arrayDateElement.length - 1].index === index) {
      const first = arrayDateElement.splice(0, 1);
      arrayDateElement.splice(arrayDateElement.length, 0, first[0]);
    };
    return arrayDateElement;
  }
  initializeDateElementArray = (firstValue, lastValue) => {
    const valuesArr = [];
    for (let i = firstValue, counter = 1; i <= lastValue; i++) {
      valuesArr.push({
        index: counter,
        value: i
      });
      counter++;
    }
    return valuesArr;
  }
  componentDidMount() {
    const month = 'month';
    const year = 'year';
    const values = 'values';
    const current = 'current';
    const currentMonth = new JalaliDate().getMonth();
    const currentYear= new JalaliDate().getFullYear();
    const monthName = this.initializeDateElementArray(this.state.month.min, this.state.month.max)
    const yearArrayValues = this.initializeDateElementArray(this.state.year.min, this.state.year.max)
    const monthArrayValues = this.exutableListArray(monthName, currentMonth);
    const newState = {
      ...this.state,
      [month]: {
        ...this.state.month,
        [values]: [
          ...monthArrayValues
        ],
        [current]: currentMonth
      },
      [year]: {
        ...this.state.year,
        [values]: [
          ...yearArrayValues
        ],
        [current]: yearArrayValues.find(val => {
          return val.value === currentYear;
        }).index
      },

    }
    this.setState({
      month: newState.month,
      year: newState.year
    })
  }
  render() {
    let month = null;
    let year = null;
    if (this.state.month.values && this.state.year.values) {
      month = <DatePickerElements
        type='month'
        values={this.state.month.values}
        min={this.state.month.min}
        max={this.state.month.max}
        clicked={this.onChangeTheDate}
        current={this.state.month.current}
      />
      year = <DatePickerElements
        type='year'
        values={this.state.year.values}
        min={this.state.year.min}
        max={this.state.year.max}
        current={this.state.year.current}
        clicked={this.onChangeTheDate}
      />
    };
    return (
      <div className="App">
        <div className="picker">
          {month}
          <DatePickerDays
            currentMonth={this.state.month.current}
            currentYear={this.state.year.current}
            currentDay={this.state.currentDay}
            currentDayName={this.state.currentDayName}
          />
          {year}
        </div>
      </div>
    );
  }
}

export default App;