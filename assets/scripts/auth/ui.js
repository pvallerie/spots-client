const store = require('./../store')

const resetForms = function () {
  $('form').trigger('reset')
}

const onSignUpSuccess = function (response) {
  console.log(response.user, ' signed up successfully!')
  $('#unauthenticated-message').text('Account created!')
  resetForms()
}

const onSignInSuccess = function (response) {
  console.log(response.user, ' signed in!')
  // store the user object so we can use token later with authorized events
  store.user = response.user
  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('#authenticated-message').text('Signed in!')
  resetForms()
}

const onSignOutSuccess = function () {
  console.log('Signed out successfully!')
  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('#unauthenticated-message').text('Signed out!')
  resetForms()
}

const onChangePasswordSuccess = function (response) {
  console.log('Changed password successfully!')
  $('#authenticated-message').text('Password changed successfully!')
  resetForms()
}

const onError = function (error) {
  $('#account-message').text('Error: ' + error.responseJSON.message)
  $('#unauthenticated-message').text('Error: ' + error.responseJSON.message)
  $('#authenticated-message').text('Error: ' + error.responseJSON.message)
  resetForms()
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onError
}
