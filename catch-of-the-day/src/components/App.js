import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this); // adds addFish to App's this obj
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    // get initial State
    this.state = {
      fishes: {},
      order: {}
    };
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

  loadSamples() {
    this.setState({ fishes: sampleFishes });
  }

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order};
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1; 
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
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/> {/* passing the functions down to inventory */}
      </div>
    )
  }
}

export default App;