import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, Image, View, Text, ListView } from 'react-native';
import Style from './Style';

class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  getFormattedRow(item) {
    const dummyImg = require('./../img/1.jpg');
    return (
      <TouchableOpacity onPress={() => this.props.onPress(item)}>
        <View style={Style.ItemList.container}>
          <Image
            source={dummyImg}
            style={Style.ItemList.photo}
          />
          <Text style={Style.ItemList.name}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.props.data);
    return (
        <View>
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
