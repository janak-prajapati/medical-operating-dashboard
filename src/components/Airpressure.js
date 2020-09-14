import React, { Component } from 'react';
import { Observable, interval } from 'rxjs';

const events = require('events');
const eventEmitter = new events.EventEmitter();

const minAirpressure = 991,
  maxAirpressure = 1041;

const temp_data = new Observable((subscriber) => {
  const randome_airpressure_data = parseInt(
    minAirpressure + (maxAirpressure - minAirpressure) * Math.random()
  );
  return subscriber.next(randome_airpressure_data);
});

class Airpressure extends Component {
  componentDidMount() {
    const seconds = interval(1000);
    eventEmitter.on('data', (airVal) => {
      this.props.changeData({ airVal: airVal });
    });
    seconds.subscribe(() => {
      temp_data.subscribe((airVal) => {
        eventEmitter.emit('data', airVal);
      });
    });
  }

  render() {
    return <div></div>;
  }
}

export default Airpressure;
