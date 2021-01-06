const store = require('./../store')

const resetForms = function () {
  $('form').trigger('reset')
}

const onSignUpSuccess = function (response) {
  console.log(response.user, ' signed up successfully!')
  resetForms()
}

const onSignInSuccess = function (response) {
  console.log(response.user, ' signed in!')
  // store the user object so we can use token later with authorized events
  store.user = response.user

  resetForms()
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess
}
