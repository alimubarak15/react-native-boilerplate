import {combineReducers} from 'redux';

//test reducer
const initialState = {
  data: ['ali mubarak'],
};
const testReducer = (state = initialState, action) => {
  return state;
};

//rootreducer
export const rootReducer = combineReducers({
  test: testReducer,
});
