'use strict'
var _ = require('lodash')
var ReactRedux = require('react-redux')
var React = require('react')
var ReactDOM = require('react-dom')
var config = require('./config')
var store = require('./store')
var actions = require('./actions')

var Button = React.createClass({
  render: function () {
    return (
      <div className={this.props.active ? 'active' : ''} onClick={this.props.toggleButtonActiveness}>
        {this.props.buttonText}
      </div>
    )
  }
})

var App = React.createClass({

  componentDidMount: function () {
    // change the button text every five seconds
    var text = ['Hi! I\'m a button','Evil button','Happy button','Friendly button']
    var self = this
    setInterval(function () {
      var randomText = text[Math.floor(Math.random() * text.length)]
      self.props.updateButtonText(randomText)
    }, 5000)
  },

  render: function () {
    return (
      <Button
        active={this.props.active}
        toggleButtonActiveness={this.props.toggleButtonActiveness}
        buttonText={this.props.buttonText}
      />
    )
  }
})

function mapStateToProps (state) {
  return {
    active: state.active,
    buttonText: state.buttonText
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toggleButtonActiveness: function () {
      dispatch(actions.toggleButtonActiveness())
    },
    updateButtonText: function (text) {
      dispatch(actions.updateButtonText(text))
    }
  }
}

var ConnectedApp = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App)

// initial render
var rootElement = document.getElementById('site-canvas')
var Provider = ReactRedux.Provider
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  rootElement
)
