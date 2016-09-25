import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './src/reducers';
import App from './src/App';
import { fetchFeatured } from './src/actions';

const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));
class disiko extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
// Get initial data
(function() {
  store.dispatch(fetchFeatured());
})();

AppRegistry.registerComponent('disiko', () => disiko);
