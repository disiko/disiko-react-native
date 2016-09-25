import React, { Component, PropTypes } from 'react';
import { ToolbarAndroid, View } from 'react-native';
import Style from './Style';

const optionIcon = require('./../img/ic_more_vert_white_24dp.png');
const navIcon = require('./../img/ic_dehaze_white_24dp.png');
const logo = require('./../img/logo.png')

class MainToolbar extends Component {
    render() {
      return (
        <View>
          <ToolbarAndroid
            style={Style.MainToolbar.toolbar}
            logo={logo}
            navIcon={navIcon}
            onIconClicked={this.props.onIconClicked}
            actions={[
              {
                title: 'Options',
                icon: optionIcon,
                show: 'always'
              }
            ]}
            onActionSelected={this.props.onActionSelected}
          />
        </View>
      );
    }
}

MainToolbar.propTypes = {
  onActionSelected: PropTypes.func,
  onIconClicked: PropTypes.func,
};
MainToolbar.defaultProps = {
  onActionSelected: () => {},
  onIconClicked: () => {},
}

export default MainToolbar;
