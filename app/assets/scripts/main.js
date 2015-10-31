'use strict'
var _ = require('lodash')
var d3 = require('d3')
var config = require('./config')
var store = require('./store')
var actions = require('./actions')

var render = function () {
  var state = _.assign({}, store.getState())
  // destroy everything and add a new svg; not how you should normally use D3
  d3.select('#site-canvas').selectAll('*').remove()
  var svg = d3.select('#site-canvas').append('svg')
              .attr('height', 300)
              .attr('width', 300)

  // render a circle and a rectangle according to our application state
  svg.append('circle')
     .attr('cx', state.circle.position.x)
     .attr('cy', state.circle.position.y)
     .attr('r', state.circle.radius)
     .attr('fill', state.circle.color)

  svg.append('rect')
     .attr('x', state.rectangle.position.x)
     .attr('y', state.rectangle.position.y)
     .attr('width', state.rectangle.width)
     .attr('height', state.rectangle.height)
     .attr('fill', state.rectangle.color)
}
// initial render
render()
store.subscribe(render)

var colors = ['red','orange','yellow','green','blue','rebeccapurple']
setInterval(function() {
  store.dispatch(actions.updateCircleRadius(Math.random() * 40))
  store.dispatch(actions.updateCircleColor(colors[Math.floor(Math.random() * colors.length)]))
  store.dispatch(actions.updateCirclePosition(Math.random() * 100, Math.random() * 100))
  store.dispatch(actions.updateRectangleWidth(Math.random() * 60))
  store.dispatch(actions.updateRectangleHeight(Math.random() * 60))
  store.dispatch(actions.updateRectangleColor(colors[Math.floor(Math.random() * colors.length)]))
  store.dispatch(actions.updateRectanglePosition(Math.random() * 100 + 100, Math.random() * 100 + 100))
}, 1000)
