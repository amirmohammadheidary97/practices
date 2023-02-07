const statusbar = document.querySelector("#status-bar")
const plus1Btn = document.querySelector("#plus1")
const minus1Btn = document.querySelector("#minus1")
const resetBtn = document.querySelector("#reset")
const countInput = document.querySelector("input#count-input")
const setCountBtn = document.querySelector("#set-count")
//////////

////////////////////////////
const actions = {
    INCEREMENT: "INCEREMENT",
    DECEREMENT: "DECEREMENT",
    RESET: "RESET",
}
const counterInitialState = {
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
            return counterInitialState
        default:
            return state
    }
}
const userStore = createStore(userReducer, counterInitialState)
//////////
const initialize = () => {

    statusbar.innerText = counterInitialState.status
    countInput.setAttribute("value", counterInitialState.count)
    ////
    plus1Btn.addEventListener("click", () => {
        userStore.dispatch({ type: actions.INCEREMENT, payload: undefined })
    });
    minus1Btn.addEventListener("click", () => {
        userStore.dispatch({ type: actions.DECEREMENT, payload: undefined })
    });
    resetBtn.addEventListener("click", () => {
        userStore.dispatch({ type: actions.RESET, payload: undefined })
    })
    ///
    const onCountChanged = ({ state, action }) => {
        const { type, payload } = action
        countInput.setAttribute("value", state.count)
    }
    userStore.subscribe(onCountChanged)
}
//////////
initialize()