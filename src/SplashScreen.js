import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Style from './Style';

class SplashScreen extends Component {
  render() {
    return (
      <View style={Style.SplashScreen.container}>
        <Text style={Style.SplashScreen.title}>
          DISIKO
        </Text>
      </View>
    );
  }
}

export default SplashScreen;
