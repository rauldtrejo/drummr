import React, { Component } from 'react';
import BeatButton from './BeatButton'

class BeatTrack extends Component {
  constructor() {
    super();
    this.state = {
      trackArray: [1,2,3,4]
    }
    this.state = {
      trackArray: this.generateButtons()
    }
  }
  generateButtons= () => {
    return this.state.trackArray.map( (element, index)=> {
      return(
        <BeatButton value={index}/>
        )
    }
    )
  }
  render() {
    return (
      <div>
        {this.state.trackArray.length ? this.state.trackArray : "Loading..." }
      </div>
    );
  }
}

export default BeatTrack;
