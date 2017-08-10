import React from 'react';

/**
 * You can only return one parent element
 * Need to make sure you self close tags
 */

class StorePicker extends React.Component {
  // use jsx to write html in js
  render() {
    return (
      <form className="store-selector">
        { /* This is how you comment in jsx */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store -> </button>
      </form>
    )
  }
}

export default StorePicker;