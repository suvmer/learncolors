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
            return {...state, answers: state.answers.map((el, i) => {
                if(i == state.step)
                  return action.payload;
                return el;
              })};
        case "CHANGEPAGE":
            return {...state, step: (Math.min(Math.max(0, step + payload.action), questions.length))};
    }
}