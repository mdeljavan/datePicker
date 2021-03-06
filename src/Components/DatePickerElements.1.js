import React, { Component } from 'react';
import { mapArrayToElements } from './../utility'
const DatePickerElements = (props) => {
  const currentValue = props.values.find(val => {
    return val.index === props.current
  });
  let ElementValues = props.values;
  const MaxAndMins = {
    min: props.min,
    max: props.max
  };
  const checkIndexDateElement = (index) => {
    const { min, max } = MaxAndMins;

    const minIndex = props.values.find(val => {
      return val.value === min;
    }).index;
    const maxIndex = props.values.find(val => {
      return val.value === max;
    }).index;

    if (index < minIndex) {
      return maxIndex;
    }
    if (index > maxIndex) {
      return minIndex;
    };
    return index;
  }
  const onChangeDate = (howManuChange) => {
    let current = currentValue.index;
    let changedIndex = current - howManuChange;
    applyChangeDate(changedIndex);
  };
  const applyChangeDate = (changedIndex) => {
    const arrayDateElement = [
      ...ElementValues
    ];
    arrayDateElement.forEach((item, i) => {
      arrayDateElement[i] = {
        ...item
      };
    });
    let index = checkIndexDateElement(changedIndex);
    props.clicked(props.type, index);
  };
  const currentYear = (currentIndex) => {
    const objYear = ElementValues.find(year => {
      return year.index === currentIndex
    });
    return objYear;
  }
  const onDoubleClickHandler = (event) => {
    if (event.target.tagName === 'LI') {
      if (!props.doubleClickd) {
        const currentYear = currentValue;
        const lastNum = currentYear.value.toString().slice(-1);
        let current;
        if (lastNum >= 0 && lastNum <= 5) {
          current = currentYear.value - lastNum;
        } else {
          current = currentYear.value + (-lastNum + 10);
        }
        // const currentValue = this.state.ElementValues.find(itm => {
        //   return itm.value === current
        // })
        props.doubleClicked(current)
      } 
      // else {
      //   this.setState(prevState => {
      //     return {
      //       doubleClickd: !prevState.doubleClickd
      //     };
      //   });
      // }
    };
    return;
  };
  const elementLists = mapArrayToElements(ElementValues, currentValue, props.type);
  return (
    <ul
      className="pick"
      onDoubleClick={props.type === 'year' ? (event) => onDoubleClickHandler(event) : null}>
      {elementLists}
      <div className="pick-arw pick-arw-l next"
        onClick={!props.isDoubleClicked ?
          () => onChangeDate(-1, props.type === 'month' ? 'months' : 'years')
          : () => onChangeDate(-10, props.type === 'month' ? 'months' : 'years')}
      >{props.isDoubleClicked ? '>>' : '>'}</div>
      <div
        className="pick-arw pick-arw-r prev"
        onClick={!props.isDoubleClicked ?
          () => onChangeDate(1, props.type === 'month' ? 'months' : 'years')
          : () => onChangeDate(10, props.type === 'month' ? 'months' : 'years')}
      >{props.isDoubleClicked ? '<<' : '<'}</div>
    </ul>
  );
};
export default DatePickerElements;












// if ( props.type === 'year' ) {
  //   for ( let i = props.min, counter = 1; i <= props.max; i++ ) {
  //     ElementValues.push( {
  //       index: counter,
  //       value: i
  //     } );
  //     counter++;
  //   }
  // } else if ( props.type === 'month' ) {
  //     ElementValues = [
  //       {
  //         value: 'فروردین',
  //         index: 1

  //       },
  //       {
  //         value: 'اردیبهشت',
  //         index: 2

  //       },
  //       {
  //         value: 'خرداد',
  //         index: 3

  //       },
  //       {
  //         value: 'تیر',
  //         index: 4

  //       },
  //       {
  //         value: 'مرداد',
  //         index: 5

  //       },
  //       {
  //         value: 'شهریور',
  //         index: 6

  //       },
  //       {
  //         value: 'مهر',
  //         index: 7

  //       },
  //       {
  //         value: 'آبان',
  //         index: 8

  //       },
  //       {
  //         value: 'آذر',
  //         index: 9

  //       },
  //       {
  //         value: 'دی',
  //         index: 10

  //       },
  //       {
  //         value: 'بهمن',
  //         index: 11

  //       },
  //       {
  //         value: 'اسفند',
  //         index: 12

  //       }
  //     ];
  // };