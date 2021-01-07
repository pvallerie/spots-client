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
  $('#change-password').on('click', () => $('#change-password-form').show())
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  // spots:
  $('#create-new-spot').on('click', () => $('#new-spot-form').show())
  $('#new-spot-form').on('submit', spotEvents.onCreateNewSpot)
  $('#show-all-spots').on('click', spotEvents.onShowAllSpots)
  // $('#show-seen-spots').on('click', spotEvents.onShowSeenSpots)
  // $('#show-unseen-spots').on('click', spotEvents.onShowUnseenSpots)
  $('#delete-spot-form').on('submit', spotEvents.onDeleteSpot)
  $('#update-spot').on('click', () => $('#update-spot-form').show())
  $('#update-spot-form').on('submit', spotEvents.onUpdateSpot)
})
