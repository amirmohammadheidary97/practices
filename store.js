function createStore(reducer, initialState = {}) {
  ///
  const store = {
    state: initialState,
    listeners: [],
    middlewares: [],
    getState: () => state,
    subscribe: function (listener) {
      if (!this.listeners.find(listener))
        this.listeners.push(listener);
    },
    unsubscribe: function (listener) {
      const index = this.listeners.findIndex(listener)
      this.listeners.splice(index, 1);
    },
    dispatch: function (payload = { type, action }) {
      this.state = reducer({ state: this.state, payload });
      setTimeout(() => {
        this.listeners.forEach(listener => listener(payload));
      }, 0);
    }
  }
  ///
  return store;
};
