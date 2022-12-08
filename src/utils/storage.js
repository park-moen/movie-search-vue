const storage = window.localStorage;

const getItem = (key, defaultValue) => {
  try {
    const storeState = storage.getItem(key);

    if (storeState) {
      return JSON.parse(storeState);
    }
  } catch (error) {
    console.error(error);
  }
  return defaultValue;
};

const setItem = (key, value) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};


export default {getItem, setItem};
