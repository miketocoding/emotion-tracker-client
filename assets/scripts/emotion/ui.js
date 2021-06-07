'use strict'

const store = require('./../store')

const createEmotionSuccess = function (res) {
  console.log(`this is the response data, ${JSON.stringify(res)}`)
  store.emotion = res.emotion
  $('#messaging').text('Thank you for sharing your feelings')
  $('#create-emotion').trigger('reset')
}

const createEmotionFailure = function () {
  console.log('failed to create emotion')
  $('#messaging').text('Something went wrong, can you try again?')
}

const indexEmotionsSuccess = function (res) {
  $('#messaging').text('Emotion index success!')
  // $('#emotions-display-all').html(
  //   res.emotions.map(emotion => `<div>
  //     <h3>${emotion.emotionName}</h3>
  //     <p>Directed By: ${emotion.description}</p>
  //   </div>`)
  // )
  // console.log('success, emotions indexed')
  //
  let emotionHtml = ''
  res.forEach(emotion => {
    emotionHtml += `
    <div>
      <h3>${emotion.emotionName}</h3>
      <p>Description: ${emotion.description}</p>
      <p>ID: ${emotion._id}
    </div>
  `
  })
  $('#emotions-display-all').html(emotionHtml)
}

const indexEmotionsFailure = function () {
  console.log('failed to index emotions')
  $('#messaging').text('Emotions index failed')
}

const showEmotionSuccess = function (res) {
  $('#show-emotion').trigger('reset')
  $('#messaging').text('Show emotion success')
  $('#emotions-display-all').html(
    res.emotions.map(emotion => `<div>
      <h3>${emotion.emotionName}</h3>
      <p>Directed By: ${emotion.description}</p>
    </div>`)
  )
}

const showEmotionFailure = function () {
  $('#messaging').text('Show emotion failure')
}

const deleteEmotionSuccess = function () {
  $('#delete-emotion').trigger('reset')
  $('#messaging').text('Emotion deleted')
}

const deleteEmotionFailure = function () {
  $('#messaging').text('Emotion delete failure')
  $('#delete-emotion').trigger('reset')
}

const updateEmotionSuccess = function (res) {
  console.log('update emotion success')
  $('#update-emotion').trigger('reset')
  $('#messaging').text('Emotion updated')
}

const updateEmotionFailure = function () {
  console.log('failed to update emotion')
  $('#messaging').text('Emotion update failure')
}

module.exports = {
  createEmotionSuccess,
  createEmotionFailure,
  indexEmotionsSuccess,
  indexEmotionsFailure,
  showEmotionSuccess,
  showEmotionFailure,
  deleteEmotionSuccess,
  deleteEmotionFailure,
  updateEmotionSuccess,
  updateEmotionFailure
}
