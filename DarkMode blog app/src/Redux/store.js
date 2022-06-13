import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux"

import { reducer } from "./blog/reducer" 

import thunk from "redux-thunk"

const rootReducer =combineReducers({reducer});
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store= legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
);