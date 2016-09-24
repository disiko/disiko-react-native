import { StyleSheet } from 'react-native';
import Color from './Color';

const Style = {
  SplashScreen: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color['Blue']['700'],
    },
    title: {
      fontSize: 35,
      textAlign: 'center',
      color: Color['White']['Text'],
      flex: 1,
      textAlignVertical: 'center',
    }
  }),
  MainToolbar: StyleSheet.create({
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
  ItemList: StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    photo: {
      height: 65,
      width: 65,
      borderRadius: 5,
    },
    name: {
      marginLeft: 12,
      fontSize: 16,
    },
  }),
};

export default Style;
