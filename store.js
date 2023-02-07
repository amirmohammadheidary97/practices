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
      this.listeners.forEach(listener => listener(action));
    }
  }
  ///
  return store;
};

////////////////////////////
////////////////////////////
const actions = {
  INCEREMENT: "INCEREMENT",
  DECEREMENT: "DECEREMENT",
  RESET: "RESET",
}
const userInitialState = {
  count: 0,
  status: "nothing"
}
const userReducer = ({ state, action }) => {
  const { payload, type } = action;
  ////
  switch (type) {
    case actions.INCEREMENT:
      return { count: state.count + 1, status: "incremented" }
    case actions.DECEREMENT:
      return { count: state.count - 1, status: "decremented" }
    case actions.RESET:
      return initialState
    default:
      return state
  }
}
const userStore = createStore(userReducer, initialState)