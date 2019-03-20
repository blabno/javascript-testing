import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showGreeting: false };
    this.greet = this.greet.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.state.showGreeting || <Button onClick={this.greet}>Say hello</Button>}
          {this.state.showGreeting && <h1 className="greeting">Hello World</h1>}
        </div>
      </div>
    );
  }

  greet() {
    this.setState({ showGreeting: true });
  }
}

export default App;
