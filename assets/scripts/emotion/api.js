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

module.exports = {
  createEmotion
}
