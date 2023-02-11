const statusbar = document.querySelector("#status-bar")
const plus1Btn = document.querySelector("#plus1")
const minus1Btn = document.querySelector("#minus1")
const resetBtn = document.querySelector("#reset")
const countInput = document.querySelector("input#count-input")
const unsubscribeBtn = document.querySelector("#unsubscribe")
const subscribeBtn = document.querySelector("#subscribe")
////////////////////////////
const actions = {
    INCEREMENT: "INCEREMENT",
    DECEREMENT: "DECEREMENT",
    RESET: "RESET",
    // UNSUBSCRIBE: "UNSUBSCRIBE"
}
const counterInitialState = {
    count: 0,
    status: "nothing"
}
const counterReducer = (state, action) => {
    const { payload, type } = action;
    ////
    switch (type) {
        case actions.INCEREMENT:
            return { count: state.count + 1, status: "incremented" }
        case actions.DECEREMENT:
            return { count: state.count - 1, status: "decremented" }
        case actions.RESET:
            return counterInitialState
        default:
            return state
    }
}
const counterStore = applyMiddleware(createLoggerMiddleware)(createStore)(counterReducer, counterInitialState)
//  createStore(counterReducer, counterInitialState)
//////////
const initialize = () => {

    statusbar.innerText = counterInitialState.status
    countInput.setAttribute("value", counterInitialState.count)
    ///
    const onCountChanged = (state, action) => {
        const { type, payload } = action
        countInput.setAttribute("value", state.count)
    }
    let unsubscribe_onCountChanged;
    ////
    plus1Btn.addEventListener("click", () => {
        counterStore.dispatch({ type: actions.INCEREMENT, payload: undefined })
    });
    minus1Btn.addEventListener("click", () => {
        counterStore.dispatch({ type: actions.DECEREMENT, payload: undefined })
    });
    resetBtn.addEventListener("click", () => {
        counterStore.dispatch({ type: actions.RESET, payload: undefined })
    })
    unsubscribeBtn.addEventListener("click", () => {
        if (unsubscribe_onCountChanged)
            unsubscribe_onCountChanged()
    })
    subscribeBtn.addEventListener("click", () => {
        unsubscribe_onCountChanged = counterStore.subscribe(onCountChanged)
    })
}
//////////
initialize()