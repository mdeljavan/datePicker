import React from 'react';
export const mapArrayToElements = ( arrayElements, current ) => {
  // console.log(arrayElements,current)
  let isBefore = true;
  let indexCurrent = null;
  const elementLists = arrayElements.map( ( el, index ) => {
    if ( el.index === current.index ) {
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