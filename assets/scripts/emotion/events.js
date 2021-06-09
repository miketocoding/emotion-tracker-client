'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateEmotion = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createEmotion(data)
    .then(ui.createEmotionSuccess)
    .catch(ui.createEmotionFailure)
}

const onIndexEmotions = function (event) {
  api.indexEmotions()
    .then(ui.indexEmotionsSuccess)
    .catch(ui.indexEmotionsFailure)
}

const onIndexMyEmotions = function (event) {
  api.indexMyEmotions()
    .then(ui.indexMyEmotionsSuccess)
    .catch(ui.indexMyEmotionsFailure)
}

const onClearIndexEmotions = function () {
  $('#emotions-list').text('')
  $('#my-emotions-list').text('')
  $('.after-sign-in-messaging').text('Clear Posts Successful!')
}

const onShowEmotion = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showEmotion(data.id)
    .then(ui.showEmotionSuccess)
    .catch(ui.showEmotionFailure)
}

const onDeleteEmotion = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteEmotion(data.id)
    .then(ui.deleteEmotionSuccess)
    // .then(() => onIndexEmotions(event))
    .catch(ui.deleteEmotionFailure)
}

const onUpdateEmotion = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const emotionId = data.id
  api.updateEmotion(emotionId, data)
    .then(ui.updateEmotionSuccess)
    .catch(ui.updateEmotionFailure)
}

const onDynamicDestroyEmotion = function (event) {
  event.preventDefault()
  const emotionId = $(event.target).data('id')
  api.deleteEmotion(emotionId)
    .then(ui.deleteEmotionSuccess)
    .then(() => onIndexMyEmotions(event))
    .catch(ui.deleteEmotionFailure)
}

const onDynamicUpdateEmotion = function (event) {
  event.preventDefault()
  const emotionId = $(event.target).data('id')
  const data = getFormFields(event.target)
  api.updateEmotion(emotionId, data)
    .then(ui.updateEmotionSuccess)
    .then(() => onIndexMyEmotions(event))
    .catch(ui.updateEmotionFailure)
}

module.exports = {
  onCreateEmotion,
  onIndexEmotions,
  onIndexMyEmotions,
  onClearIndexEmotions,
  onShowEmotion,
  onDeleteEmotion,
  onUpdateEmotion,
  onDynamicDestroyEmotion,
  onDynamicUpdateEmotion
}
