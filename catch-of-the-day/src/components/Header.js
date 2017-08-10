import React from 'react';

/**
 * If you just need a component that has render() and has no functionality
 * tied to the component, no special stuff then can use a stateless functional compon.
 */

const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}


export default Header;