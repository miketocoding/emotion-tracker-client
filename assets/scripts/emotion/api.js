'use strict'
const config = require('./../config.js')
const store = require('./../store.js')

const createEmotion = function (data) {
  console.log('createEmotion data is: ', data)
  return $.ajax({
    method: 'POST',
    data: data,
    url: config.apiUrl + '/emotions',
    headers: {
      Authorization: `Bearer ${store.user.token}`,
      body: '{}'
    }
  })
}

const indexEmotions = function (data) {
  console.log('trying to index emotions...')
  return $.ajax({
    url: config.apiUrl + '/emotions',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const indexMyEmotions = function () {
  console.log('trying to index emotions...')
  return $.ajax({
    url: config.apiUrl + '/emotions',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const showEmotion = function (emotionId) {
  console.log('trying to show emotion...')
  return $.ajax({
    url: config.apiUrl + '/emotions/' + emotionId,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const deleteEmotion = function (emotionId) {
  console.log('trying to delete emotion...')
  return $.ajax({
    url: config.apiUrl + '/emotions/' + emotionId,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateEmotion = function (emotionId, data) {
  console.log('trying to update emotion...')
  return $.ajax({
    url: config.apiUrl + '/emotions/' + emotionId,
    method: 'PATCH',
    data,
    headers: {
      authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  createEmotion,
  indexEmotions,
  indexMyEmotions,
  showEmotion,
  deleteEmotion,
  updateEmotion
}
