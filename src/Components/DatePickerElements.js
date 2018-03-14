import React, { Component } from 'react';
import { mapArrayToElements } from './../utility'
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
      MaxAndMins: {
        min: 1,
        max: ElementValues.length
      },
      currentValue: props.current - props.min + 1,
      doubleClickd: false
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
  onChangeDate = ( howManuChange ) => {
    let current = this.state.currentValue;
    let changedIndex = current - howManuChange;
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
      currentValue: index,
      ElementValues: arrayDateElement
    }
    );
  };
  componentDidUpdate () {
    if ( this.props.current !== this.state.currentValue ) {
      return this.props.setCurrent( this.state.currentValue, this.props.type );
    };
  }
  componentDidMount () {
    let currentElementValues = this.state.currentValue;
    this.applyChangeDate( currentElementValues );
  };

  currentYear = ( currentIndex ) => {
    const objYear = this.state.ElementValues.find( year => {
      return year.index === currentIndex
    } );
    return objYear;
  }
  onDoubleClickHandler = ( event ) => {
    if ( event.target.tagName === 'LI' ) {
      if ( !this.state.doubleClickd ) {
        const currentYear = this.currentYear( this.state.currentValue );
        const lastNum = currentYear.value.toString().slice( -1 );
        let current;
        if ( lastNum >= 0 && lastNum <= 5 ) {
          current = currentYear.value - lastNum;
        } else {
          current = currentYear.value + ( -lastNum + 10 );
        }
        const currentValue = this.state.ElementValues.find( itm => {
          return itm.value === current
        } )
        this.setState( prevState => {
          return {
            currentValue: currentValue.index,
            doubleClickd: !prevState.doubleClickd
          };
        } );
      } else {
        this.setState( prevState => {
          return {
            doubleClickd: !prevState.doubleClickd
          };
        } );
      }
    };
    return;
  };
  render () {
    const ElementValues = this.state.ElementValues;
    const currentIndex = this.state.currentValue;
    const elementLists = mapArrayToElements( ElementValues, currentIndex );
    return (
      <ul
        className="pick"
        onDoubleClick={ this.props.type === 'year' ? ( event ) => this.onDoubleClickHandler( event ) : null }>
        { elementLists }
        <div className="pick-arw pick-arw-l next"
          onClick={ !this.state.doubleClickd ?
            () => this.onChangeDate( -1, this.props.type === 'month' ? 'months' : 'years' )
            : () => this.onChangeDate( -10, this.props.type === 'month' ? 'months' : 'years' ) }
        >{ this.state.doubleClickd ? '>>' : '>' }</div>
        <div
          className="pick-arw pick-arw-r prev"
          onClick={ !this.state.doubleClickd ?
            () => this.onChangeDate( 1, this.props.type === 'month' ? 'months' : 'years' )
            : () => this.onChangeDate( 10, this.props.type === 'month' ? 'months' : 'years' ) }
        >{ this.state.doubleClickd ? '<<' : '<' }</div>
      </ul>
    );
  };
};
export default DatePickerElements;