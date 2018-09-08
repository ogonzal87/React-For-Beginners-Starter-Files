import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  }

  addFish = (fish) => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes }
    // 2. Add our new fish to that fishes
    fishes[`fish${Date.now()}`] = fish
    // 3. Set the new fishes object to state
    this.setState({ fishes })
  }

  loadSamples = () => {
    this.setState({ fishes: sampleFishes })
  }

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order }
    // 2. Either add to the order or update the number of items ordered
    order[key] = order[key] + 1 || 1
    // 3. Call setState to update our state object
    this.setState({ order })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Oscar's Store" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                details={this.state.fishes[key]}
                addToOrder={() => this.addToOrder(key)}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} orders={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App