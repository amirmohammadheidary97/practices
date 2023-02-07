function createStore(reducer, initialState = null) {
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
    dispatch: function (action = { type, payload }) {
      this.state = reducer({ state: this.state, action });
      this.listeners.forEach(listener => listener({ state: this.state, action }));
    },
    // asyncDispatch:async function(action={type,payload})=>{

    // }
  }
  ///
  return store;
};

////////////////////////////