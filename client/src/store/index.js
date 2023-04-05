import {createStore, combineReducers} from "redux";
import {gameReducer} from "./gameReducer";
import {profileReducer} from "./profileReducer";

const rootReducer = combineReducers({
    game: gameReducer,
    profile: profileReducer
});

export const store = createStore(rootReducer);