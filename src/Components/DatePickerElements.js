import React, { Component } from 'react';
class DatePickerElements extends Component {
  constructor ( props ) {
    super( props );
    let ElementValues = [];
    if ( props.type === 'year' ) {
      for ( let i = props.min, counter = 1; i <= props.max; i++ ) {
        ElementValues.push( {
          index: counter,
          value: i
        } );
        counter++;
      }
    } else if ( props.type === 'month' ) {
      ElementValues = [
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
    };
    this.state = {
      ElementValues,
      MaxAndMins:{
        min: 1,
        max: ElementValues.length
      },
      currentValue:props.current - props.min +1
    }  
  };
  checkIndexDateElement = ( index ) => {
    const { min, max } = this.state.MaxAndMins;
    if ( index < min ) {
      return max;
    }
    if ( index > max ) {
      return min;
    };
    return index;
  }
  onChangeDate = ( typeChange ) => {
    let current = this.state.currentValue;
    let changedIndex;
    if ( typeChange === 'inc' ) {
      changedIndex = current + 1;
    } else if ( typeChange === 'dec' ) {
      changedIndex = current - 1;
    };
    this.applyChangeDate( changedIndex );
  };
  applyChangeDate = ( changedIndex ) => {
    const arrayDateElement = [
      ...this.state.ElementValues
    ];
    arrayDateElement.forEach( ( item, i ) => {
      arrayDateElement[ i ] = {
        ...item
      };
    } );
    let index = this.checkIndexDateElement( changedIndex );
    if ( arrayDateElement[ 0 ].index === index ) {
      const last = arrayDateElement[ arrayDateElement.length - 1 ];
      arrayDateElement.splice( arrayDateElement.length - 1, 1 );
      arrayDateElement.splice( 0, 0, last );
    } else if ( arrayDateElement[ arrayDateElement.length - 1 ].index === index ) {
      const first = arrayDateElement[ 0 ];
      arrayDateElement.splice( 0, 1 );
      arrayDateElement.splice( arrayDateElement.length, 0, first );
    }
    this.setState( {
      currentValue:index,
      ElementValues: arrayDateElement
    }
    );
  }
  componentDidMount () {
    let currentElementValues = this.state.currentValue;
    this.applyChangeDate( currentElementValues );
  };
  mapArrayToElements = ( arrayElements, current ) => {
    let isBefore = true;
    let indexCurrent = null;
    const elementLists = arrayElements.map( ( el, index ) => {
      if ( el.index === current ) {
        indexCurrent = index;
        isBefore = false;
        return <li
          className="pick-sl"
          key={ el.index }
          value={ el.index }>
          { el.value }</li>;
      } else {
        return <li
          className={ isBefore ? "pick-bfr" : "pick-afr" }
          key={ el.index }
          value={ el.index }>
          { el.value }</li>;
      }
    } )
    if ( indexCurrent === 1 ) {
      elementLists[ elementLists.length - 1 ] = <li
        className={ "pick-afr" }
        key={ Math.random() } value={ arrayElements[ arrayElements.length - 1 ].index }>
        { arrayElements[ arrayElements.length - 1 ].value }</li>;
    }
    return elementLists;
  }
  render () {
    const ElementValues = this.state.ElementValues;
    const currentIndex = this.state.currentValue;
    const elementLists = this.mapArrayToElements( ElementValues, currentIndex );
    return (
      <ul className="pick-m">
        { elementLists }
        <div className="pick-arw pick-arw-l next"
          onClick={ () => this.onChangeDate( 'dec', this.props.type === 'month' ? 'months' : 'years' ) }
        >{ ">" }</div>
        <div
          className="pick-arw pick-arw-r prev"
          onClick={ () => this.onChangeDate( 'inc', this.props.type === 'month' ? 'months' : 'years' ) } >{ "<" }</div>
      </ul>
    );
  };
};
export default DatePickerElements;