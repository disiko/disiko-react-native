import utils from './utils';

export const showSplashScreen = () => ({ type: 'SHOW_SPLASH_SCREEN' });
export const hideSplashScreen = () => ({ type: 'HIDE_SPLASH_SCREEN' });

export const showDrawer = () => ({ type: 'SHOW_DRAWER' });
export const hideDrawer = () => ({ type: 'HIDE_DRAWER' });

export const receiveFeatured = (data) => ({ type: 'RECEIVE_FEATURED', data: data });
export const fetchFeatured = () => {
  return (dispatch) => {
    const targetUrl = config.api.featured;
    // TODO Loading
    utils.ajax(`GET:${targetUrl}`).then((resp) => {
      let data = [];
      try {
        data = JSON.parse(resp._bodyText);
      } catch (e) {
        console.log(e);
      }
      dispatch(receiveFeatured(data));
    }).catch((err) => {
      dispatch(receiveFeatured([]));
      console.log(err);
    });
  }
}

export const receiveNearest = (data) => ({ type: 'RECEIVE_NEAREST', data: data });
export const fetchNearest = () => {
  return (dispatch) => {
    const targetUrl = config.api.nearest;
    // TODO Loading
    utils.ajax(`GET:${targetUrl}`).then((resp) => {
      let data = [];
      try {
        data = JSON.parse(resp._bodyText);
      } catch (e) {
        console.log(e);
      }
      dispatch(receiveNearest(data));
    }).catch((err) => {
      dispatch(receiveFeatured([]));
      console.log(err);
    });
  }
}
