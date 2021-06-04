'use strict'
const config = require('./../config.js')
const store = require('./../store.js')

const signUp = function (data) {
  console.log('sign up data is ', data)
  return $.ajax({
    method: 'POST',
    data: data,
    url: config.apiUrl + '/sign-up'
  })
}

const signIn = function (data) {
  console.log('sign in data is ', data)
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/sign-in'
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const changePassword = function (data) {
  console.log('change password data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Bearer  + ${store.user.token}`
    },
    data
    // data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
