import store from "./store.js";

const getDefaultState = () => {
  const initialSettings = {

  };
  let settings = null;
  if (store){
    settings = store.getState().settings;
  }
  const state = {

    settings: settings ? settings : initialSettings
  };

  // programatically set settings from settings key in state

  return state;
}

export default getDefaultState;