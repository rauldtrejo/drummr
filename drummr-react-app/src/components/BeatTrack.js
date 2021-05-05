import React, { Component } from 'react';
import BeatButton from './BeatButton';
import Button from 'react-bootstrap/Button'


class BeatTrack extends Component {
  // We need to add props to constructor and super so that we can access props inside
  // the generate buttons function.
  constructor(props) {
    super(props);
    this.state = {
      buttonArray: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    }
    this.state = {
      buttonArray: this.generateButtons(props)
    }
  }
  generateButtons= (props) => {
    return this.state.buttonArray.map( (element, index)=> {
      return(
        console.log(props),
        <BeatButton value={`${props.name}-${index+1}`}/>
        )
    }
    )
  }
  render() {
    return (
      <>
        <Button value={this.props.name}>
          {this.props.name}
        </Button>
        {this.state.buttonArray.length ? this.state.buttonArray : "Loading..." }
      </>
    );
  }
}

export default BeatTrack;
