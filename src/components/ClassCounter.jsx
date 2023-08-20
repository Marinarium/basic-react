import React from 'react';

class ClassCounter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    console.log(this);
    this.setState({count: this.state.count + 1});
  }

  decrement() {
    console.log(this);
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <h2>Let's count in our class component! {this.state.count}</h2>
        <button onClick={this.increment}>More</button>
        <button onClick={this.decrement}>Less</button>
      </div>
    )
  }
}

export default ClassCounter;