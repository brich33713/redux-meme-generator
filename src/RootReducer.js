const INITIAL_STATE = {memeContainer: []}

const RootReducer = (state = INITIAL_STATE, action) => {
    let arr = state.memeContainer[0] === undefined ? [action.props] : [...state.memeContainer,action.props]
    return {...state,memeContainer:arr}
}

export default RootReducer;