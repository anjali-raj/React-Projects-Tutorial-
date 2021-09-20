//import redux from 'redux';
//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter-slice';
import authReducer from './auth-slice';


// const reduxReducer = (state = initialState, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.value,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'toggle'){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// };

// const store = createStore(reduxReducer);

const store = configureStore({
    //reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
    reducer: {counter: counterReducer, auth: authReducer}
});

//export const counterActions = counterSlice.actions;
//export const authActions = authSlice.actions;

export default store;

// store.subscribe();
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});