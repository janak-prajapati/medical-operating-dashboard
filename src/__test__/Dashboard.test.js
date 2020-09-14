import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../components/Dashboard';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('changeData function', () => {
  const minTemperature = 17.5,
    maxTemperature = 30;
  it('should change value of  temperature data', () => {
    const val =
      minTemperature + (maxTemperature - minTemperature) * Math.random();
    const randome_temperature_data = Math.floor(val * 10) / 10;

    const component = shallow(<Dashboard />);
    jest.useFakeTimers();
    expect(component.state('tempData')).toEqual(17.5);
    component.instance().changeData({ tempVal: randome_temperature_data });
    jest.advanceTimersByTime(1000);
    expect(component.state('tempData')).toEqual(randome_temperature_data);
    jest.useRealTimers();
  });
});

describe('changeData function', () => {
  const minAirpressure = 991,
    maxAirpressure = 1041;
  it('should change value of air pressure data', () => {
    const randome_airpressure_data = parseInt(
      minAirpressure + (maxAirpressure - minAirpressure) * Math.random()
    );

    const component = shallow(<Dashboard />);
    jest.useFakeTimers();
    expect(component.state('airData')).toEqual(991);
    component.instance().changeData({ airVal: randome_airpressure_data });
    jest.advanceTimersByTime(1000);
    expect(component.state('airData')).toEqual(randome_airpressure_data);
    jest.useRealTimers();
  });
});

describe('changeData function', () => {
  const minHumidity = 12,
    maxHumidity = 90;
  it('should change value of humidity data', () => {
    const randome_humidity_data = parseInt(
      minHumidity + (maxHumidity - minHumidity) * Math.random()
    );

    const component = shallow(<Dashboard />);
    jest.useFakeTimers();
    expect(component.state('humidityData')).toEqual(12);
    component.instance().changeData({ humVal: randome_humidity_data });
    jest.advanceTimersByTime(1000);
    expect(component.state('humidityData')).toEqual(randome_humidity_data);
    jest.useRealTimers();
  });
});
