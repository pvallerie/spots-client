'use strict'
const authEvents = require('./auth/events')
const spotEvents = require('./spot/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.authenticated').hide()

  // auth:
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // spots:
  $('#create-new-spot').on('click', () => $('.authenticated-hidden').show())
  $('#new-spot-form').on('submit', spotEvents.onCreateNewSpot)
  $('#show-all-spots').on('click', spotEvents.onShowAllSpots)
  $('#show-seen-spots').on('click', spotEvents.onShowSeenSpots)
})
