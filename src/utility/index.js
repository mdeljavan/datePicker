import React from 'react';
export const mapArrayToElements = (arrayElements, current, type) => {
  // console.log(arrayElements,current)
  console.log(current)
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
  let monthN = null;
  const getMonthName = (ind) => {
    monthN = monthName.find(month => {
      return month.index === ind;
    }).value;
    return monthN;
  }
  let isBefore = true;
  let indexCurrent = null;
  const elementLists = arrayElements.map((el, index) => {
    if (el.index === current.index) {
      indexCurrent = index;
      isBefore = false;
      return <li
        className="pick-sl"
        key={el.index}
        value={el.index}>
        {type === 'year' ? el.value : getMonthName(el.value)}</li>;
    } else {
      return <li
        className={isBefore ? "pick-bfr" : "pick-afr"}
        key={el.index}
        value={el.index}>
        {type === 'year' ? el.value : getMonthName(el.value)}</li>;
    }
  })
  if (indexCurrent === 1) {
    elementLists[elementLists.length - 1] = <li
      className={"pick-afr"}
      key={Math.random()}
      value={arrayElements[arrayElements.length - 1].index}>
      {arrayElements[arrayElements.length - 1].value}</li>;
  }
  return elementLists;
}