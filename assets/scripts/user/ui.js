'use strict'

const store = require('./../store')

const signUpSuccess = function (res) {
  $('#messaging').text('Welcome, ' + res.user.email)
}

const signUpFailure = function () {
  $('#messaging').text('Failed to sign up')
}

const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  store.user = res.user
  $('#messaging').text(res.user.email + ', has signed in successfully!')
  $('#after-sign-in').show()
  $('#before-sign-in').hide()
}

const signInFailure = function () {
  $('#messaging').text('Failed to sign in')
}

const signOutSuccess = function () {
  store.user = null
  $('#messaging').text('Signed out successfully. Come play again!')
  // Display the "before sign in" elements
  $('#before-sign-in').show()
  // Hide the "after sign in" elements
  $('#after-sign-in').hide()
  // Clear all the forms!
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#messaging').text('Sign out failed :(')
}

const changePasswordSuccess = function () {
  $('#password-change-message').text('Password changed successfully!')
  console.log('changePasswordSuccess ran and nothing to return')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#password-change-message').text('Error changing password')
  console.error('changePasswordFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
