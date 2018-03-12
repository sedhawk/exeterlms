import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { connect } from "react-redux";
import { Provider } from 'react-redux'

const initialState = {
  count: 0
};
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: state.count = 0 };
    case 'INCREMENT5':
      return { ...state, count: state.count + 5 };
    case 'INCREMENT10':
      return { ...state, count: state.count + 10 };
    default:
      return state;
  }
};


const store = createStore(reducer);

console.log('State at start: ', store.getState())

const Counter = ({ count, onIncrement, onDecrement, onReset, onIncrement5, onIncrement10 }) => (
  <div>
    <h1>{ count }</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onReset}>Reset</button>
    <button onClick={onDecrement}>-</button>
    <div>
      <button onClick={onIncrement5}>+5</button>
      <button onClick={onIncrement10}>+10</button>
    </div>
  </div>
);

store.subscribe(() =>
  console.log(store.getState())
)

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({type: 'DECREMENT'}),
    onReset: () => dispatch({type: 'RESET'}),
    onIncrement5: () => dispatch({type: 'INCREMENT5'}),
    onIncrement10: () => dispatch({type: 'INCREMENT10'}),
  }
}

function onIncrement() {
  return { type: 'INCREMENT' }
}
function onDecrement() {
  return { type: 'DECREMENT' }
}
function onReset() {
  return { type: 'RESET' }
}
function onIncrement5() {
  return { type: 'INCREMENT5' }
}
function onIncrement10() {
  return { type: 'INCREMENT10' }
}

const ConnectedCounter = connect(mapStateToProps, { onIncrement, onDecrement, onReset, onIncrement5, onIncrement10 })(Counter);

ReactDOM.render(
  <Provider store={store}>
  <ConnectedCounter/>
  </Provider>,
  document.getElementById('root')
);