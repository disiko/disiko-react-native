export const showingSplashScreen = (state = true, actions) => {
  switch (actions.type) {
    case 'SHOW_SPLASH_SCREEN':
      return true;
    case 'HIDE_SPLASH_SCREEN':
      return false;
    default:
      return state;
  }
};

export const showingDrawer = (state, actions) => {
  switch (actions.type) {
    case 'SHOW_DRAWER':
      return true;
    case 'HIDE_DRAWER':
      return false;
    default:
      return !!state;
  }
};

export const itemList = (state, actions) => {
  switch (actions.type) {
    case 'RECEIVE_FEATURED':
      return {
        type: 'fetured',
        items: actions.data,
      };
    case 'RECEIVE_NEAREST':
      return {
        type: 'nearest',
        items: actions.data,
      };
    default:
      return state || [];
  }
}
