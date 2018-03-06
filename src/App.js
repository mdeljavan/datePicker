import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    date: {
      year: null,
      month: 2,
      day: null
    },
    preClicked: false
  }
  months = [
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
  MaxAndMins = {
    month: {
      max: 12,
      min: 1
    }
  }
  checkIndexDateElement = ( index, type ) => {
    const { min, max } = this.MaxAndMins[ type ];
    if ( index < min ) {
      const last = this.months[ this.months.length - 1 ];
      this.months.splice( this.months.length - 1, 1 );
      this.months.splice( 0, 0, last );
      return this.months[1].index;
    }
    if ( index > max ) return max;
    return index;
  }
  onChangeDate = ( typeChange, elementChange ) => {

    const date = {
      ...this.state.date,
    };
    let current = this.state.date[ elementChange ];
    if ( typeChange === 'inc' ) {
      current++;
    } else if ( typeChange === 'dec' ) {
      current--;
    };
    date[ elementChange ] = this.checkIndexDateElement( current, elementChange );
    this.setState( {
      date
    } );
  };
  render () {
    const { month } = this.state.date;
    const monthsList = this.months.map( m => {
      if ( m.index < month ) {
        return <li
          className="pick-bfr"
          key={ m.index }>
          { m.name }</li>
      } else if ( m.index > month ) {
        return <li
          className="pick-afr"
          key={ m.index }>
          { m.name }</li>
      } else {
        return <li
          className="pick-sl"
          key={ m.index }>
          { m.name }</li>
      }
    } )

    return (
      <div className="App">
        <div className="picker">
          <ul className="pick-m">
            { monthsList }
            <div className="pick-arw pick-arw-l next"
              onClick={ () => this.onChangeDate( 'dec', 'month' ) }
            >{ ">" }</div>
            <div
              className="pick-arw pick-arw-r prev"
              onClick={ () => this.onChangeDate( 'inc', 'month' ) } >{ "<" }</div>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {

//   state = {
//     current: 2,
//     numbers: [ 1, 2, 3, 4, 5 ],
//     btnPrePressed:false,
//     btnNextPressed: false,
//     keyPre: 0,
//     keyNext:0
//   }
//   checkIndex = ( index ) => {
//     if ( index < 0 ) return 0;
//     if ( index > 4 ) return 4;
//     return index;
//   }
//   onNextHandler = () => {
//     let currentIndex = this.state.current;
//     let nextIndex = this.checkIndex( currentIndex + 1 );
//     let numbers = [ ...this.state.numbers ];
//     if ( nextIndex === numbers.length - 1 ) {
//       const first_num = numbers[ 0 ];
//       numbers.splice( 0, 1 );
//       numbers.splice( numbers.length, 0, first_num );
//       nextIndex--;
//     }
//     this.setState( {
//       numbers,
//       current: nextIndex,
//       btnPrePressed: false,
//       btnNextPressed:true
//     } );
//   }
//   onPrevHandler = () => {
//     let currentIndex = this.state.current;
//     let prevIndex = this.checkIndex( currentIndex - 1 );
//     let numbers = [ ...this.state.numbers ];
//     if ( prevIndex === 0 ) {
//       const last_num = numbers[ numbers.length - 1 ];
//       numbers.splice( numbers.length - 1, 1 );
//       numbers.splice( 0, 0, last_num );
//       prevIndex++;
//     }
//     this.setState( {
//       numbers,
//       current: prevIndex,
//       btnPrePressed: true,
//       btnNextPressed:false
//     } );
//   };

//   render () {
//     const { btnPrePressed, btnNextPressed, current, numbers } = this.state;
//     let numsList = numbers.map( ( num, index ) => {

//       if ( index < current ) {
//         return <li key={ num } value={ num } className="before">{ num }</li>
//       } else if ( index > current ) {
//         return <li key={ num } value={ num } className="after">{ num }</li>
//       } else {
//         return <li key={ num } value={ num } className="current">{ num }</li>
//       }
//     } );
//     if ( btnPrePressed ) {
//       const num = numbers[numbers.length-1]
//       numsList[numsList.length-1]=<li key={ Math.random() } value={ num } className="after">{ num }</li>;
//     }
//     return (
//       <div className="App">
//         <div>
//           <ul id="mda">
//             { numsList }
//             <div className="pick-arw pick-arw-l"
//               onClick={ this.onPrevHandler }
//             >{ "<" }</div>
//             <div
//               className="pick-arw pick-arw-r"
//               onClick={ this.onNextHandler } >{ ">" }</div>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
