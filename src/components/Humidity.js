import React, { Component } from 'react';
import { Observable, interval } from 'rxjs';

const events = require('events');
const eventEmitter = new events.EventEmitter();

const minHumidity = 12,
  maxHumidity = 90;

const temp_data = new Observable((subscriber) => {
  const randome_humidity_data = parseInt(
    minHumidity + (maxHumidity - minHumidity) * Math.random()
  );
  return subscriber.next(randome_humidity_data);
});

class Humidity extends Component {
  componentDidMount() {
    const seconds = interval(1000);
    eventEmitter.on('data', (humVal) => {
      this.props.changeData({ humVal: humVal });
    });
    seconds.subscribe(() => {
      temp_data.subscribe((humVal) => {
        eventEmitter.emit('data', humVal);
      });
    });
  }

  render() {
    return <div></div>;
  }
}

export default Humidity;
