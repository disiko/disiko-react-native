import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Style from './Style';

class NavigationItem extends Component {
  render () {
    return (
      <TouchableOpacity onPress={(e) => this.props.onPress(e)}>
        <Text style={Style.NavigationItem.title}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default NavigationItem;
