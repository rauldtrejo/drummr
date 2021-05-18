import React, { Component } from 'react';
import BeatButton from './BeatButton';
import Button from 'react-bootstrap/Button'
import * as Tone from "tone";
const gongURL = 'https://tonejs.github.io/audio/berklee/gong_1.mp3'
const gongLocal= '/Users/coco/collabs/drummr/drummr-react-app/src/gong_1.mp3'
const kickURL = 'https://www.dropbox.com/s/iab7tr863wmr6u0/SAP2_Kick_01.wav'

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
  sampleURL= this.props.URL
  buffer = new Tone.Buffer((this.sampleURL,()=>{
    let buff = this.buffer.get()
    // console.log(buff,"AAAAAHAHHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHAHAHAHAHAHAHHAHAHAHAH")
  }))
  sample = new Tone.Player(this.sampleURL).toDestination()
  // console.log(this.sample,"this is buffer",buffer)
  generateButtons= (props) => {
    return this.state.buttonArray.map( (element, index)=> {
      return(
        <BeatButton value={`${props.name}-${index+1}`} play={this.play}/>
        )
    }
    )
  } 
  play = (props) => {
    Tone.loaded().then(()=>{this.sample.start()})

    // let audio = document.querySelector(`#${props.value}`)
    // let audio = document.querySelector(`audio`)
    // console.log(audio);
    // audio.play()
  }

  render() {
    console.log(this.props.URL)
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
