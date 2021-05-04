import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

class BeatButton extends Component {
  constructor() {
    super();
    this.state = {
      on: false
    }
  }
  handleClick=(event)=>{
    event.preventDefault()
    this.setState({
      on: !this.state.on
    })
  }
  render() {
    return (
      <div>
        <div className="buttonColor">
        <Button onClick={this.handleClick} variant={ this.state.on ? "success" : "danger" }>Test</Button>
        </div>
      </div>
    );
  }
}

export default BeatButton;
