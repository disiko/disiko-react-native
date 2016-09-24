/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MainDrawer from './src/MainDrawer';
import SplashScreen from './src/SplashScreen';
import config from './config/default';

class disiko extends Component {
  constructor(props) {
    super(props);
    this.state = { targetComponent: <SplashScreen/> };
  }

  componentDidMount() {
    const targetComponent = <MainDrawer />;
    const loadingTime = config.splashLoading;
    setTimeout(() => this.setState({ targetComponent }), loadingTime);
  }

  render() {
    return this.state.targetComponent;
  }
}

AppRegistry.registerComponent('disiko', () => disiko);
