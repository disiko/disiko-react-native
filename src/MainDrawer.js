import React, { Component } from 'react';
import { DrawerLayoutAndroid, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import MainToolbar from './MainToolbar';
import Style from './Style';
import NavigationItem from './NavigationItem';
import ItemList from './ItemList';
import { hideDrawer, showDrawer, showSplashScreen, fetchFeatured, fetchNearest } from './actions';
import config from './../config/default';
import utils from './utils';

const mapStateToProps = ({ showingDrawer, itemList }) => ({ showingDrawer, itemList});
const mapDispatchToProps = (dispatch) => ({
  onHideDraweClick() {
    dispatch(hideDrawer())
  },
  onShowDrawerClick() {
    dispatch(showDrawer())
  },
  onFeaturedPress() {
    dispatch(fetchFeatured());
  },
  onNearestPress() {
    dispatch(fetchNearest());
  },
  onExitPress() {
    dispatch(showSplashScreen());
  }
});

class MainDrawer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    this.handleDrawerState();
  }

  handleDrawerState() {
    if (this.props.showingDrawer) {
      this.refs.DRAWER.openDrawer();
    } else {
      this.refs.DRAWER.closeDrawer();
    }
  }

  onItemListPress(item) {
    // console.log(item);
  }

  render() {
    const navigationView = (
      <View style={Style.MainDrawer.drawer}>
        <TouchableOpacity onPress={this.props.onHideDraweClick}>
          <View style={Style.NavigationItem.headerContainer}>
            <Text style={Style.NavigationItem.header}>
              Back to Main
            </Text>
          </View>
        </TouchableOpacity>
        <NavigationItem
          title="Featured"
          onPress={this.props.onFeaturedPress}
        />
        <NavigationItem
          title="Nearest"
          onPress={this.props.onNearestPress}
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
          onPress={this.props.onExitPress}
        />
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={250}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        onDrawerClose={this.props.onHideDraweClick}
        ref="DRAWER"
      >
        <MainToolbar
          onActionSelected={this.props.onShowDrawerClick}
        />
        <View style={Style.MainDrawer.viewContainer}>
          <ItemList
            data={this.props.itemList.items}
            onPress={this.onItemListPress.bind(this)}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainDrawer);
