'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateEmotion = function (event) {
  event.preventDefault()
  console.log('I am in onCreateEmotion')
  const data = getFormFields(event.target)
  console.log(`this is what's in form fields, ${JSON.stringify(data)}`)
  api.createEmotion(data)
    .then(ui.createEmotionSuccess)
    .catch(ui.createEmotionFailure)
}

const onIndexEmotions = function (event) {
  api.indexEmotions()
    .then(ui.indexEmotionsSuccess)
    .catch(ui.indexEmotionsFailure)
}

const onClearIndexEmotions = function () {
  $('#emotions-list').text('')
    .then($('#messaging').text('Clear Posts Successful!'))
}

const onShowEmotion = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showEmotion(data.id)
    .then(ui.showEmotionSuccess)
    .catch(ui.showEmotionFailure)
}

const onDeleteEmotion = function (event) {
  console.log('I am in onDeleteEmotion')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(`this is what is in getFormFields data: ${JSON.stringify(data)}`)
  api.deleteEmotion(data.id)
    .then(ui.deleteEmotionSuccess)
    // .then(() => onIndexEmotions(event))
    .catch(ui.deleteEmotionFailure)
}

const onUpdateEmotion = function (event) {
  console.log('I am in onUpdateEmotion')
  event.preventDefault()
  const data = getFormFields(event.target)
  const emotionId = data.id
  console.log(`this is what's in form fields, ${JSON.stringify(data)}`)
  api.updateEmotion(emotionId, data)
    .then(ui.updateEmotionSuccess)
    .catch(ui.updateEmotionFailure)
}

const onDynamicDestroyEmotion = function (event) {
  event.preventDefault()
  console.log('in onDynamicDestroyEmotion')
  const emotionId = $(event.target).data('id')
  console.log(emotionId)
  api.deleteEmotion(emotionId)
    .then(ui.deleteEmotionSuccess)
    .then(() => onIndexEmotions(event))
    .catch(ui.deleteEmotionFailure)
}

const onDynamicUpdateEmotion = function (event) {
  event.preventDefault()
  console.log('in onDynamicUpdateEmotion')
  const emotionId = $(event.target).data('id')
  console.log(emotionId)
  const data = getFormFields(event.target)
  api.updateEmotion(emotionId, data)
    .then(ui.updateEmotionSuccess)
    .then(() => onIndexEmotions(event))
    .catch(ui.updateEmotionFailure)
}

module.exports = {
  onCreateEmotion,
  onIndexEmotions,
  onClearIndexEmotions,
  onShowEmotion,
  onDeleteEmotion,
  onUpdateEmotion,
  onDynamicDestroyEmotion,
  onDynamicUpdateEmotion
}
