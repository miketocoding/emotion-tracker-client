'use strict'

const store = require('./../store')

const createEmotionSuccess = function (res) {
  console.log(`this is the response data, ${res}`)
  store.emotion = res.emotion
  $('#messaging').text('Emotion successfully created')
  $('#create-emotion').trigger('reset')
}

const createEmotionFailure = function () {
  $('#messaging').text('Failed to create emotion')
}

module.exports = {
  createEmotionSuccess,
  createEmotionFailure
}
