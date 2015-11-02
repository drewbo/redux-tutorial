'use strict'
var _ = require('lodash')
var config = require('./config')
var store = require('./store')
var actions = require('./actions')

var render = function () {
  var state = _.assign({}, store.getState())

  var siteCanvas = document.getElementById('site-canvas')

  // add a button with text and class supplied by "state"
  // @ricardomestre would be upset at this non-semantic div but it was easier
  // to style
  siteCanvas.innerHTML = '<div class=' + (state.active ? 'active' : '') +
  '>' + state.buttonText + '</div>'

  // add an event listener to the button
  siteCanvas.firstChild.addEventListener('click', function () {
    store.dispatch(actions.toggleButtonActiveness())
  })
}

// initial render
render()

// whenever the application state changes, call render again
store.subscribe(render)

// change the button text every five seconds
var text = ['Hi! I\'m a button','Evil button','Happy button','Friendly button']
setInterval(function () {
  var randomText = text[Math.floor(Math.random() * text.length)]
  store.dispatch(actions.updateButtonText(randomText))
}, 5000)
