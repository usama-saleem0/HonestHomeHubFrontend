// reducers.js
import { combineReducers } from 'redux';

const initialState = {
  currentRoute: '/'
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NAVIGATE_TO_STEPS':
      return {
        ...state,
        currentRoute: '/steps',
        payload: action.payload
      };
    // Handle other navigation actions
    default:
      return state;
  }
};

// Add other reducers here if you have them
// Example:
// import anotherReducer from './anotherReducer';