import React, { Component } from 'react';
import { DrawerLayoutAndroid, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MainToolbar from './MainToolbar';
import Style from './Style';
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
      <View style={Style.MainDrawer.drawer}>
        <TouchableOpacity onPress={() => this.refs.DRAWER.closeDrawer()}>
          <View style={Style.NavigationItem.headerContainer}>
            <Text style={Style.NavigationItem.header}>
              Back to Main
            </Text>
          </View>
        </TouchableOpacity>
        <NavigationItem
          title="Featured"
          onPress={() => {}}
        />
        <NavigationItem
          title="Nearest"
          onPress={() => {}}
        />
        <NavigationItem
          title="Whist list"
          onPress={() => {}}
        />
        <NavigationItem
          title="Setting"
          onPress={() => {}}
        />
        <NavigationItem
          title="Exit"
          onPress={() => {}}
        />
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={250}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        ref="DRAWER"
      >
        <MainToolbar
        onActionSelected={this.onToolBarActionSelected.bind(this)}
        />
        <View style={Style.MainDrawer.viewContainer}>
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
