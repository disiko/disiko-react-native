import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainDrawer from './MainDrawer';
import SplashScreen from './SplashScreen';
import { showSplashScreen, hideSplashScreen } from './actions';
import config from './../config/default';

const mapStateToProps = ({ showingSplashScreen }) => ({ showingSplashScreen });
const mapDispatchToProps = (dispatch) => ({ hideSplashScreen: () => dispatch(hideSplashScreen()) });

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => this.props.hideSplashScreen(), config.splashLoading)
  }

  render() {
    return this.props.showingSplashScreen ? <SplashScreen /> : <MainDrawer />;
  }
}
App.propTypes = {
  showingSplashScreen: PropTypes.bool.isRequired,
  hideSplashScreen: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
