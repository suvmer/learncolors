const defaultState = {
    step: 0,
    score: 0,
    isStarted: false, //for start info modal
    isInitialized: false,
    questions: [],
    answers: []
};

export const gameReducer = (state = defaultState, action) => {
    if(action.type != "INITIALIZE" && !state.isInitialized)
        return state;
    switch(action.type) {
        case "INITIALIZE":
            return action.payload;
        case "ANSWER":
            return {...state, step: Math.min(state.answers.length-1, state.step+1), answers: state.answers.map((el, i) => {
                if(i == state.step)
                  return action.payload;
                return el;
              })};
        case "CHANGESCORE":
            return {...state, score: action.payload};
        case "CHANGEPAGE":
            return {...state, step: (Math.min(Math.max(0, state.step + action.payload), state.questions.length))};
        default:
            return state;
    }
}