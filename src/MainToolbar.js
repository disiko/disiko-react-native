import React, { Component, PropTypes } from 'react';
import { ToolbarAndroid, View } from 'react-native';
import Style from './Style';

const optionIcon = require('./../img/ic_view_headline_white_48dp.png');
const logo = require('./../img/logo.png')

class MainToolbar extends Component {
    render() {
      return (
        <View>
          <ToolbarAndroid
            style={Style.MainToolbar.toolbar}
            logo={logo}
            actions={[
              {
                title: 'Options',
                icon: optionIcon,
                show: 'always'
              }
            ]}
            onActionSelected={(i) => this.props.onActionSelected(i)}
          />
        </View>
      );
    }
}

MainToolbar.propTypes = {
  onActionSelected: PropTypes.func,
};
MainToolbar.defaultProps = {
  onActionSelected: () => {},
}

export default MainToolbar;
