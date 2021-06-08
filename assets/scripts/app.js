'use strict'
const userEvents = require('./user/events.js')
const emotionEvents = require('./emotion/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-out').on('click', userEvents.onSignOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
  // Hide the "after sign in" elements
  $('#after-sign-in').hide()
  $('#create-emotion').on('submit', emotionEvents.onCreateEmotion)
  $('#index-emotion').on('click', emotionEvents.onIndexEmotions)
  $('#index-my-emotion').on('click', emotionEvents.onIndexMyEmotions)
  $('.clear-index-emotion').on('click', emotionEvents.onClearIndexEmotions)
  $('#show-emotion').on('submit', emotionEvents.onShowEmotion)
  $('#delete-emotion').on('submit', emotionEvents.onDeleteEmotion)
  $('#update-emotion').on('submit', emotionEvents.onUpdateEmotion)
  $('#my-emotions-list').on('click', '.dynamic-destroy-emotion', emotionEvents.onDynamicDestroyEmotion)
  $('#my-emotions-list').on('submit', '.dynamic-update-emotion', emotionEvents.onDynamicUpdateEmotion)
  $('input:checkbox').click(function () {
    const bol = $('input:checkbox:checked').length >= 1
    $('input:checkbox').not(':checked').attr('disabled', bol)
  })
})
