'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateEmotion = function (event) {
  event.preventDefault()
  console.log('emotion created')
  const data = getFormFields(event.target)
  console.log(`this is what's in form fields, ${data}`)
  api.createEmotion(data)
    .then(ui.createEmotionSuccess)
    .catch(ui.createEmotionFailure)
}

module.exports = {
  onCreateEmotion
}
