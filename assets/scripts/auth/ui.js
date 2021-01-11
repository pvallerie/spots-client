const store = require('./../store')

const clear = require('./../clearing-functions')

const resetForms = function () {
  $('form').trigger('reset')
}

// successes:
const onSignUpSuccess = function (response) {
  $('#unauthenticated-message').text('Account created!')
  resetForms()
}

const onSignInSuccess = function (response) {
  // store the user object so we can use token later with authorized events
  store.user = response.user
  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('#change-password-form').hide()
  $('#new-spot-form').hide()
  $('#update-spot-form').hide()
  $('#delete-spot-form').hide()
  $('#authenticated-message').text('Signed in.')
  resetForms()
}

const onSignOutSuccess = function () {
  clear.clearSpotContainers()
  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('#unauthenticated-message').text('Signed out.')
  resetForms()
}

const onChangePasswordSuccess = function (response) {
  $('#change-password-form').hide()
  $('#authenticated-message').text('Password changed successfully.')
  resetForms()
}

// errors:
const onSignUpError = function (error) {
  $('#unauthenticated-message').text('Error: ' + error.responseJSON.message)
  resetForms()
}

const onSignInError = function (error) {
  $('#unauthenticated-message').show()
  $('#unauthenticated-message').text('Error: ' + error.responseJSON.message)
  resetForms()
}

const onSignOutError = function (error) {
  $('#authenticated-message').text('Error: ' + error.responseJSON.message)
  resetForms()
}

const onChangePasswordError = function (error) {
  $('#authenticated-message').text('Error: ' + error.responseJSON.message)
  resetForms()
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onSignUpError,
  onSignInError,
  onSignOutError,
  onChangePasswordError
}
