import React, { Component } from 'react';
import { DrawerLayoutAndroid, StyleSheet, View, Text } from 'react-native';

import MainToolbar from './MainToolbar';
import Color from './Color';
import NavigationItem from './NavigationItem';

class MainDrawer extends Component {
  onToolBarActionSelected(e) {
    this.refs.DRAWER.openDrawer();
  }

  render() {
    const navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <NavigationItem
          title="Featured"
          onPress={() => {}}
        />
        <NavigationItem
          title="Nearest"
          onPress={() => {}}
        />
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        ref="DRAWER"
      >
        <View>
          <MainToolbar
            onActionSelected={this.onToolBarActionSelected.bind(this)}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default MainDrawer;
