import React, { Component } from 'react';
import BeatTrack from './BeatTrack'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

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
