import { createStore, applyMiddleware } from 'redux'
import appReducer from './appReducer'
import middlewareEnhancer from './middlewareEnhancer'

let preloadedState
const persistedTodosString = localStorage.getItem('token')

if (persistedTodosString) {
    preloadedState = {
        user: {
            token: persistedTodosString
        }
    }
}

const middleware = applyMiddleware(middlewareEnhancer);

const store = createStore(
    appReducer,
    preloadedState,
    middleware
)

console.log(store.getState());

export default store
