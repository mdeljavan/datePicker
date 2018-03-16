import React, { Component } from 'react';
import './App.css';
import DatePickerElements from './Components/DatePickerElements.1';
import DatePickerDays from './Components/DatePickerDays';
class App extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      month: {
        todya: new Date().getMonth() + 1,
        current: 1,
        min: 1,
        max: 12,
        values: null
      },
      year: {
        today: new Date().getFullYear(),
        current: 1970,
        min: 1970,
        max: new Date().getFullYear() + 10,
        values: null
      },
      currentDay: new Date().getDate(),
      currentDayName: new Date().getDay(),
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
  onChangeTheDate = ( type, index, ) => {
    const ArrayValues = this.exutableListArray( this.state[ type ].values, index );
    const valueChanged = type === 'month' ? 'currentMonth' : 'currentYear';
    const ArrValue = type === 'monthArrayValues' ? 'currentMonth' : 'yearArrayValues';
    const newStateElement = {
      ...this.state[ type ],
      [ 'values' ]: [
        ...ArrayValues
      ],
      [ 'current' ]: index
    };
    this.setState( {
      [ type ]: newStateElement
      // ElementValues: arrayDateElement
    } );
  }
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
  exutableListArray = ( arr, nextIndex ) => {
    const arrayDateElement = [ ...arr ];
    const index = nextIndex;
    if ( arrayDateElement[ 0 ].index === index ) {
      const last = arrayDateElement.splice( -1, 1 );
      arrayDateElement.splice( 0, 0, last[0] );
    } else if ( arrayDateElement[ arrayDateElement.length - 1 ].index === index ) {
      const first = arrayDateElement.splice( 0, 1 );
      arrayDateElement.splice( arrayDateElement.length, 0, first[0] );
    };
    return arrayDateElement;
  }
  componentDidMount () {
    const monthName = [
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
    const monthArrayValues = this.exutableListArray( monthName, this.state.month.current );
    const yearArrayValues = [];
    for ( let i = this.state.year.min, counter = 1; i <= this.state.year.max; i++ ) {
      yearArrayValues.push( {
        index: counter,
        value: i
      } );
      counter++;
    }
    const newState = {
      ...this.state,
      [ 'month' ]: {
        ...this.state.month,
        [ 'values' ]: [
          ...monthArrayValues
        ],
        ['current']:new Date().getMonth()+1
      },
      [ 'year' ]: {
        ...this.state.year,
        [ 'values' ]: [
          ...yearArrayValues
        ],
        ['current']:new Date().getFullYear()
      },

    }
    this.setState( {
      
      month: newState.month,
      year: newState.year
    } )
  }
  render () {
    let month = null;
    let year = null;
    if ( this.state.month.values && this.state.year.values ) {
      month = <DatePickerElements
        type='month'
        values={ this.state.month.values }
        min={ this.state.month.min }
        max={ this.state.month.max }
        clicked={ this.onChangeTheDate }
        current={ this.state.month.current }
   />
      year = <DatePickerElements
        type='year'
        values={ this.state.year.values }
        min={ this.state.year.min }
        max={ this.state.year.max }
        current={ this.state.year.current }
        clicked={ this.onChangeTheDate }
         />
    };
    return (
      <div className="App">
        <div className="picker">
          { month }
          <DatePickerDays
            currentMonth={ this.state.month.current }
            currentYear={ this.state.year.current }
            currentDay={ this.state.currentDay }
            currentDayName={ this.state.currentDayName }
          />
          { year }

        </div>
      </div>
    );
  }
}

export default App;