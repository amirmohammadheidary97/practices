const createStore = () => {
  let globalStore = null;
  const subscribers = [];
  ////
  const subscribe = (subscriber) => {
    /*
    store name
    */
    subscribers.push(subscriber);
  };
  const unsubscribe = (subscriber) => {
    subscribers.push(subscriber);
  };
  ////
  const onStoreChanged = () => {
    // subscribers
  };
};
class Store {
  #globalStore = undefined;
  constructor(initialValue = undefined) {
    this.#globalStore = initialValue;
  }
  ////
  createNewStore;
}
