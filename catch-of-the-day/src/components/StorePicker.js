import React from 'react';
import { getFunName } from '../helpers';

/**
 * You can only return one parent element
 * Need to make sure you self close tags
 * 
 * In react, want to stay away from touching the DOM
 * react works by we modify the data, render out this jsx, hands off DOM
 * react handles DOM
 */

 // use jsx to write html in js
class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this); // binding the StorePicker componenet to the goToStore function this
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('clicked');
    // console.log(this); // obj this would be null

    // first grab text from box
    const value = this.storeInput.value;
    console.log(value);
    // second we're going to transition from / to /store/:storeid

  }
  
  // render methods are bound to the actual class that you are in
  // so this points to the component
  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}> {/*{this.goToStore.bind(this)}>*/} 
        { /* This is how you comment in jsx */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }}/>
        <button type="submit">Visit Store -> </button>
      </form>
    )
  }
}

export default StorePicker;