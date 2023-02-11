
function createStore(reducer, initialState, enhancer) {
  const store = {};
  let state = initialState;
  const listeners = [];
  store.getState = () => state;
  store.dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener(state, action));
  };
  store.subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }
  return store;
}
const applyMiddleware = (...middlewareFactories) => createStore => (...args) => {
  const store = createStore(...args);
  let dispatch = store.dispatch;
  middlewareFactories.forEach(factory => {
    dispatch = factory(store)(dispatch);
  });
  store.dispatch = dispatch;
  return store;
}
const createLoggerMiddleware = store => dispatch => action => {
  console.log('state', store.getState());
  dispatch(action);
  console.log('state', store.getState());
}
const createThunkMiddleware = store => dispatch => action => {
  if (typeof action === 'function') {
    return action(dispatch, store.getState());
  }
  return dispatch(action);
}
// function createStore(reducer, initialState = null) {
//   ///
//   const store = {
//     state: initialState,
//     listeners: [],
//     middlewares: [],
//     getState: () => state,
//     subscribe: function (listener) {
//       if (!this.listeners.find(listener))
//         this.listeners.push(listener);
//       // Dan Abramovs Smart Trick :
//       return () => {
//         const index = this.listeners.findIndex(listener)
//         this.listeners.splice(index, 1);
//         console.log("unsubscribed")
//       }
//     },
//     // My Method For Unsubscribe
//     // unsubscribe: function (listener) {
//     //   const index = this.listeners.findIndex(listener)
//     //   this.listeners.splice(index, 1);
//     // },
//     dispatch: function (action = { type, payload }) {
//       this.state = reducer({ state: this.state, action });
//       this.listeners.forEach(listener => listener({ state: this.state, action }));
//     },
//   }
//   ///
//   return store;
// };

////////////////////////////