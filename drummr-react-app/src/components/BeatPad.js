import React, { Component } from 'react';
import BeatTrack from './BeatTrack'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
// import * as Tone from 'tone' 

// const sampler = new Tone.Sampler({
//   urls: {
//     "Kick": "Kick.wav",
//   },
//   release: 1,
//   baseUrl: "https://github.com/skaiser33/drummr-sounds/",
// }).toDestination();

// console.log(sampler);

// Tone.loaded().then(() => {
//   sampler.triggerAttackRelease(["Kick"], 1);
// })

// const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
// Tone.loaded().then(() => {
// 	player.start();
// });

class BeatPad extends Component {
  constructor() {
    super();
    this.state = {
      play: false,
      trackArray: [1,2,3,4,5,6,7,8]
    }
    this.state ={
      trackArray: this.generateTracks()
    }
  }

  trackNames = ["Kick", "Snare", " Closed Hat", "Open Hat", "Ride", "Ride Bell", "Crash", "Clap"]
  generateTracks= () => {
    return this.state.trackArray.map( (element, index)=> {
      return(
        <>
          <Container>
            <Row>
              <BeatTrack
              name={this.trackNames[index]}
              value={index+1}
              />
            </Row>
          </Container>
        </>
        )
    }
    )
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Button variant="success">
                Play
              </Button>
              <Button variant='danger'>
                Stop
              </Button>
            </Col>
          </Row>
        </Container>
        {this.state.trackArray.length ? this.state.trackArray : "Loading..." }
      </>
    );
  }
}

export default BeatPad;
