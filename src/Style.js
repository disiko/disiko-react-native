import { StyleSheet } from 'react-native';
import Color from './Color';

const Style = {
  MainToolbar : StyleSheet.create({
    containerToolbar: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: Color['Blue']['700'],
    },
    toolbar: {
      backgroundColor: Color['Blue']['700'],
      height: 50,
    },
  }),
  NavigationItem: StyleSheet.create({
    title: {
      margin: 10,
      fontSize: 15,
      textAlign: 'left',
    },
  }),
};

export default Style;
