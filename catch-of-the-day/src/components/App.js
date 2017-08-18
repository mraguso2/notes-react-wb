import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import base from '../base';

import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this); // adds addFish to App's this obj
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);

    // get initial State
    this.state = {
      fishes: {},
      order: {}
    };
  }

  // special lifecyle method
  componentWillMount() {
    // this runs right before the app is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    // check if there is any order in localstorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
    if (localStorage) {
      // update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log({nextProps, nextState});
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order))
  }

  addFish(fish) {
    // best practice is to take a copy of your state before update
    // update our state
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now(); // add a unique timestamp
    fishes[`fish-${timestamp}`] = fish;
    // set state---you tell react what piece of state you have updated
    this.setState({ fishes }); // fishes state has changed, using new es6 object prop
  }

  updateFish(key, updatedFish) {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({ fishes: sampleFishes });
  }

  removeFish(key) {
    const fishes = {...this.state.fishes};
    fishes[key] = null;
    this.setState({ fishes });
  }

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order};
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1; 
    // update our state
    this.setState({ order });
  }

  removeFromOrder(key) {
    const order = {...this.state.order};
    delete order[key];
    // update our state
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {Object
              .keys(this.state.fishes)
              .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>) // passing key as a prop
            }
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order}
          params={this.props.params}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory 
          addFish={this.addFish} 
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          removeFish={this.removeFish}
        /> {/* passing the functions down to inventory */}
      </div>
    )
  }
}

export default App;