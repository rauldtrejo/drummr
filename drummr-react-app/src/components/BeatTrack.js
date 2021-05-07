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
        <BeatButton value={`${props.name}-${index+1}`} play={this.play}/>
        )
    }
    )
  }

  play = (props) => {
    // let audio = document.querySelector(`#${props.value}`)
    let audio = document.querySelector(`audio`)
    console.log(audio);
    audio.play()
  }

  render() {
    return (
      <>
        <Button value={this.props.name}>
          {this.props.name}
          <audio id={this.props.name} src="drummr-react-app/public/INK DRUMS-Kick-Cavern.mp3"></audio>
        </Button>
        
        {this.state.buttonArray.length ? this.state.buttonArray : "Loading..." }
      </>
    );
  }
}

export default BeatTrack;
