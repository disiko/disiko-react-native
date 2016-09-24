import React, { Component } from 'react';
import { DrawerLayoutAndroid, StyleSheet, View, Text } from 'react-native';
import MainToolbar from './MainToolbar';
import Color from './Color';
import NavigationItem from './NavigationItem';
import ItemList from './ItemList';
import config from './../config/default';
import utils from './utils';

class MainDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: [],
    };
  }

  componentDidMount() {
    this.loadFeatured();
  }

  loadFeatured() {
    const targetUrl = config.api.featured;

    utils.ajax(`GET:${targetUrl}`).then((resp) => {
      let featured = [];
      try {
        featured = JSON.parse(resp._bodyText);
      } catch (e) {
        console.log(e);
      }
      this.setState({ featured });
    }).catch((err) => {
      console.log(err);
    });
  }

  onToolBarActionSelected(e) {
    this.refs.DRAWER.openDrawer();
  }

  onItemListPress(item) {
    console.log(item);
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
          <ItemList
            data={this.state.featured}
            onPress={this.onItemListPress.bind(this)}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default MainDrawer;
