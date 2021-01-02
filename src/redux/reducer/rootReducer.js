import {combineReducers} from 'redux';

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

//actions
export const addItemAction = (item) => ({type: ADD_ITEM, item});
export const deleteItemAction = () => ({type: DELETE_ITEM});

//test reducer
const initialState = {
  data: [],
};
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        data: [...state.data, action.item],
      };
    case DELETE_ITEM:
      return {
        ...state,
        data: [],
      };

    default:
      return state;
  }
};

//rootreducer
export const rootReducer = combineReducers({
  test: testReducer,
});
