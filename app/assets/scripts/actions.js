module.exports = {
  updateButtonText: function (text) {
    return {
      type: 'UPDATE_BUTTON_TEXT',
      payload: text
    }
  },
  toggleButtonActiveness: function () {
    return {
      type: 'TOGGLE_BUTTON_ACTIVENESS'
    }
  }
}
