var redux = require('redux')
var _ = require('lodash')

// provide initial application state
var initialState = {
  circle: {
    radius: 25,
    color: 'blue',
    position: {
      x: 40,
      y: 50
    }
  },
  rectangle: {
    width: 40,
    height: 70,
    color: 'red',
    position: {
      x: 100,
      y: 30
    }
  }
}

// create a reducer which takes an action and the previous application state as
// input and then returns the new application state
var reducer = function (state, action) {
  // rather than making the state "truly immutable", I'm just being careful
  // and using this lodash function to create a copy on the first line
  var newState = _.assign({}, state)
  switch (action.type) {
    case 'UPDATE_CIRCLE_RADIUS':
      newState.circle.radius = action.payload
      break
    case 'UPDATE_CIRCLE_COLOR':
      newState.circle.color = action.payload
      break
    case 'UPDATE_CIRCLE_POSITION':
      newState.circle.position = action.payload
      break
    case 'UPDATE_RECTANGLE_WIDTH':
      newState.rectangle.width = action.payload
      break
    case 'UPDATE_RECTANGLE_HEIGHT':
      newState.rectangle.height= action.payload
      break
    case 'UPDATE_RECTANGLE_COLOR':
      newState.rectangle.color = action.payload
      break
    case 'UPDATE_RECTANGLE_POSITION':
      newState.rectangle.position = action.payload
      break
    default:
      console.warn('Possible errant action type: ' + action.type)
      break
  }
  return newState
}

// create the store with our reducer and initial application state
var store = redux.createStore(reducer, initialState)

module.exports = store
