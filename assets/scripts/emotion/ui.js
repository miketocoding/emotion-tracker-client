'use strict'

const store = require('./../store')

const createEmotionSuccess = function (res) {
  console.log(`this is the response data, ${JSON.stringify(res)}`)
  store.emotion = res.emotion
  $('.after-sign-in-messaging').text('Thank you for sharing your feelings')
  $('#create-emotion').trigger('reset')
}

const createEmotionFailure = function () {
  console.log('failed to create emotion')
  $('.after-sign-in-messaging').text('Something went wrong, can you try again?')
}

const indexEmotionsSuccess = function (res) {
  $('.after-sign-in-messaging').text('Emotion index success!')
  $('#emotions-list').html(
    res.map(emotion => `<div class="border border-info rounded">
      <h3>${emotion.emotionName}</h3>
      <p>Directed By: ${emotion.description}</p>
      <p>Emotion ID: ${emotion._id}<p>
    </div>`)
  )
  console.log('success, emotions indexed')
}

const indexEmotionsFailure = function () {
  console.log('failed to index my emotions')
  $('#after-sign-in-messaging').text('My emotions index failed')
}

const indexMyEmotionsSuccess = function (res) {
  console.log('This is the user ID', store.user._id)
  console.log('This is the value of res', res)
  console.log('This is the emotion owner ID', res.owner)
  $('.after-sign-in-messaging').text('Emotion index success!')
  let emotionHtml = ''
  for (let i = 0; i < res.length; i++) {
    if (store.user._id === res[i].owner) {
      emotionHtml += `
      <div class="border border-info rounded">
        <h3>${res[i].emotionName}</h3>
        <p>Description: ${res[i].description}</p>
        <p>ID: ${res[i]._id}</p>

        <form class="dynamic-update-emotion" data-id=${res[i]._id}>
          <label for="update-emotion-emotionName">Emotion:</label>
          <input class='dynamic-emotion-emotionName' type='text' name='emotion[emotionName]' placeholder="Update Emotion"><br>
          <label for="update-emotion-description">Description:</label>
          <input clas='update-emotion-description' type='text' name='emotion[description]' placeholder="Update Description"><br>
          <button class="dynamic-update-emotion">Update Emotion</button>
        </form>

        <button class="dynamic-destroy-emotion" data-id=${res[i]._id}>Delete Emotion</button>
      </div>
    `
    }
  }
  $('#my-emotions-list').html(emotionHtml)
}

const indexMyEmotionsFailure = function () {
  console.log('failed to index my emotions')
  $('#after-sign-in-messaging').text('My emotions index failed')
}

const showEmotionSuccess = function (res) {
  $('#show-emotion').trigger('reset')
  $('.after-sign-in-messaging').text('Show emotion success')
  $('#update-emotion-message').text('Show emotion success')
  $('#emotions-list').html(
    res.emotions.map(emotion => `<div>
      <h3>${emotion.emotionName}</h3>
      <p>Directed By: ${emotion.description}</p>
    </div>`)
  )
}

const showEmotionFailure = function () {
  $('.after-sign-in-messaging').text('Show emotion failure')
}

const deleteEmotionSuccess = function () {
  $('#delete-emotion').trigger('reset')
  $('.after-sign-in-messaging').text('Emotion deleted')
}

const deleteEmotionFailure = function () {
  $('.after-sign-in-messaging').text('You can only delete a post you created')
  $('#delete-emotion').trigger('reset')
}

const updateEmotionSuccess = function (res) {
  console.log('update emotion success')
  $('#update-emotion').trigger('reset')
  $('.after-sign-in-messaging').text('Emotion updated')
}

const updateEmotionFailure = function () {
  console.log('failed to update emotion')
  $('.after-sign-in-messaging').text('Emotion update failure')
}

module.exports = {
  createEmotionSuccess,
  createEmotionFailure,
  indexEmotionsSuccess,
  indexEmotionsFailure,
  indexMyEmotionsSuccess,
  indexMyEmotionsFailure,
  showEmotionSuccess,
  showEmotionFailure,
  deleteEmotionSuccess,
  deleteEmotionFailure,
  updateEmotionSuccess,
  updateEmotionFailure
}
