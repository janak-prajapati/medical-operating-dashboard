import React, { Component } from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import Temperature from './Temperature';
import Airpressure from './Airpressure';
import Humidity from './Humidity';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempData: 17.5,
      airData: 991,
      humidityData: 12,
    };
  }

  changeData = (props) => {
    props && props.tempVal && this.setState({ tempData: props.tempVal });
    props && props.airVal && this.setState({ airData: props.airVal });
    props && props.humVal && this.setState({ humidityData: props.humVal });
  };

  render() {
    return (
      <div>
        <Temperature changeData={this.changeData} />
        <Airpressure changeData={this.changeData} />
        <Humidity changeData={this.changeData} />

        <div className='site-statistic-demo-card'>
          <Row gutter={16}>
            <Col span={8}>
              <Card>
                <Statistic
                  title='Temperature'
                  value={this.state.tempData}
                  precision={1}
                  suffix='&#8451;'
                  data-testid='show-temperature'
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic
                  title='Air pressure'
                  value={this.state.airData}
                  suffix='hPa'
                  data-testid='show-airpressure'
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <Statistic
                  title='Humidity'
                  value={this.state.humidityData}
                  suffix='%'
                  data-testid='show-humidity'
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
