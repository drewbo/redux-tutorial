var redux = require('redux')
var _ = require('lodash')

// provide initial application state
var initialState = {
  buttonText: 'Hi! I\'m a button',
  active: false
}

// create a reducer which takes an action and the previous application state as
// input and then returns the new application state
var reducer = function (state, action) {
  // rather than making the state "truly immutable", I'm just being careful
  // and using this lodash function to create a copy on the first line
  var newState = _.assign({}, state)
  switch (action.type) {
    case 'UPDATE_BUTTON_TEXT':
      newState.buttonText = action.payload
      break;
    case 'TOGGLE_BUTTON_ACTIVENESS':
      // if it was true, make it false and vice versa
      newState.active = (newState.active) ? false : true
      break;
    default:
      console.warn('Possible errant action type: ' + action.type)
      break
  }
  return newState
}

// create the store with our reducer and initial application state
var store = redux.createStore(reducer, initialState)

module.exports = store
