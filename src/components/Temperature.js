import React, { Component } from 'react';
import { Observable, interval } from 'rxjs';

const events = require('events');
const eventEmitter = new events.EventEmitter();

const minTemperature = 17.5,
  maxTemperature = 30;

const temp_data = new Observable((subscriber) => {
  const val =
    minTemperature + (maxTemperature - minTemperature) * Math.random();
  const randome_temperature_data = Math.floor(val * 10) / 10;

  return subscriber.next(randome_temperature_data);
});

class Temperature extends Component {
  componentDidMount() {
    const seconds = interval(1000);
    eventEmitter.on('data', (tempVal) => {
      this.props.changeData({ tempVal: tempVal });
    });
    seconds.subscribe(() => {
      temp_data.subscribe((tempVal) => {
        eventEmitter.emit('data', tempVal);
      });
    });
  }

  render() {
    return <div></div>;
  }
}

export default Temperature;
