import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Style from './Style';

class NavigationItem extends Component {
  render () {
    return (
      <TouchableOpacity onPress={(e) => this.props.onPress(e)}>
        <View style={Style.NavigationItem.container}>
          <Text style={Style.NavigationItem.title}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default NavigationItem;
