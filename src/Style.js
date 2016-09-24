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
  MainDrawer: StyleSheet.create({
    viewContainer: {
      flex: 1,
      padding: 5,
      backgroundColor: Color['Grey']['200'],
    },
    drawer: {
      flex: 1,
      backgroundColor: Color['Blue']['500'],
    }
  }),
  MainToolbar: StyleSheet.create({
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
      color: Color['White']['Text'],
    },
    container: {
      marginTop: 1,
      backgroundColor: Color['Blue']['700'],
    },
    header: {
      margin: 10,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',
      color: Color['White']['Text'],
    },
    headerContainer: {
      marginTop: 1,
      backgroundColor: Color['Blue']['800'],
    },
  }),
  ItemList: StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    rowContainer: {
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 2,
      backgroundColor: Color['White']['500'],
    },
    photo: {
      height: 65,
      width: 65,
      borderRadius: 5,
    },
    name: {
      marginLeft: 12,
      fontSize: 16,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 12,
      textAlign: 'left',
      fontWeight: 'bold',
    },
    source: {
      height: 25,
      width: 75,
      right: 10,
    }
  }),
};

export default Style;
