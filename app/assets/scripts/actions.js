module.exports = {
  updateCircleRadius: function (radius) {
    return {
      type: 'UPDATE_CIRCLE_RADIUS',
      payload: radius
    }
  },
  updateCircleColor: function (color) {
    return {
      type: 'UPDATE_CIRCLE_COLOR',
      payload: color
    }
  },
  updateCirclePosition: function (x, y) {
    return {
      type: 'UPDATE_CIRCLE_POSITION',
      payload: { x: x, y: y }
    }
  },
  updateRectangleWidth: function (width) {
    return {
      type: 'UPDATE_RECTANGLE_WIDTH',
      payload: width
    }
  },
  updateRectangleHeight: function (height) {
    return {
      type: 'UPDATE_RECTANGLE_HEIGHT',
      payload: height
    }
  },
  updateRectangleColor: function (color) {
    return {
      type: 'UPDATE_RECTANGLE_COLOR',
      payload: color
    }
  },
  updateRectanglePosition: function (x, y) {
    return {
      type: 'UPDATE_RECTANGLE_POSITION',
      payload: { x: x, y: y }
    }
  }
}
