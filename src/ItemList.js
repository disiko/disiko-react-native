import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, Image, View, Text, ListView } from 'react-native';
import Style from './Style';
import utils from './utils';

const tokopediaIcon = require('./../img/tokopedia.png');
const lazadaIcon = require('./../img/lazada.png');
const bukalapakIcon = require('./../img/bukalapak.png');
const blibliIcon = require('./../img/blibli.png');
const defaultIcon = require('./../img/default.png');

class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  getSourceIcon(s) {
    switch (s) {
      case 'lazada':
        return lazadaIcon;
      case 'tokopedia':
        return tokopediaIcon;
      case 'bukalapak':
        return bukalapakIcon;
      case 'blibli':
        return blibliIcon;
      default:
        return defaultIcon;
    }
  }

  getFormattedRow(item) {
    const dummyImg = require('./../img/1.jpg');
    const sourceIcon = this.getSourceIcon(item.source);
    const price = utils.formatPrice(item.price);

    return (
      <TouchableOpacity onPress={() => this.props.onPress(item)}>
        <View style={Style.ItemList.rowContainer}>
          <Image
            source={dummyImg}
            style={Style.ItemList.photo}
          />
          <Text style={Style.ItemList.name}>
            {item.name}{"\n"}
            <Text style={Style.ItemList.price}>
              {price}{"\n"}{"\n"}
            </Text>
            <Image
            source={sourceIcon}
            style={Style.ItemList.source}
            />
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.props.data);
    return (
        <View style={Style.ItemList.mainContainer}>
          <ListView
            dataSource={dataSource}
            renderRow={this.getFormattedRow.bind(this)}
            enableEmptySections={true}
          />
        </View>
    );
  }
}
ItemList.propTypes = {
  onPress: PropTypes.func,
  data: PropTypes.array,
};

export default ItemList;
