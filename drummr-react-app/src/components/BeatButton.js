import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';

const beatCol = {
  flexGrow: "0",
  paddingRight: "0",
  paddingLeft: "0",
  paddingTop: "10px",
  paddingBottom: "10px",
}

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
    // We need to get rid of Flex Grow:1, padding right, and padding left of the Col class for buttons to be inline and with no spaces.
    return (
      <>
        <Col style={beatCol}>
          <div className="buttonColor">
            <Button value={this.props.value} onClick={this.handleClick} variant={ this.state.on ? "success" : "danger" }>B</Button>
          </div>
        </Col>
      </>
    );
  }
}

export default BeatButton;
