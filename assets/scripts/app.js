'use strict'
const authEvents = require('./auth/events')
const spotEvents = require('./spot/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.authenticated').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()

  // auth:
  $('#sign-up').on('click', () => {
    $('#unauthenticated-message').text('')
    $('#sign-up-form').toggle()
    $('#sign-in-form').hide()
  })
  $('#sign-in').on('click', () => {
    $('#unauthenticated-message').text('')
    $('#sign-in-form').toggle()
    $('#sign-up-form').hide()
  })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('click', () => $('#change-password-form').toggle())
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  // spots:
  $('#create-new-spot').on('click', () => {
    $('#authenticated-message').hide()
    $('#update-spot-form').hide()
    $('#delete-spot-form').hide()
    $('#new-spot-form').toggle()
  })
  // $('#create-new-spot').toggle('#new-spot-form')
  $('#new-spot-form').on('submit', spotEvents.onCreateNewSpot)
  $('#show-all-spots').on('click', spotEvents.onShowAllSpots)
  $('#show-seen-spots').on('click', spotEvents.onShowSeenSpots)
  $('#show-unseen-spots').on('click', spotEvents.onShowUnseenSpots)
  $('#all').on('click', '.delete-spot', '.update-spot', () => {
    $('#authenticated-message').hide()
    $('#new-spot-form').hide()
    $('#update-spot-form').hide()
    $('#delete-spot-form').toggle()
  })
  $('#seen').on('click', '.delete-spot', '.update-spot', () => {
    $('#authenticated-message').hide()
    $('#new-spot-form').hide()
    $('#update-spot-form').hide()
    $('#delete-spot-form').toggle()
  })
  $('#unseen').on('click', '.delete-spot', '.update-spot', () => {
    $('#authenticated-message').hide()
    $('#new-spot-form').hide()
    $('#update-spot-form').hide()
    $('#delete-spot-form').toggle()
  })
  $('#delete-spot-form').on('submit', spotEvents.onDeleteSpot)
  $('.update-spot').on('click', () => $('#update-spot-form').toggle())
  $('#all').on('click', '.update-spot', () => {
    $('#authenticated-message').hide()
    $('#new-spot-form').hide()
    $('#delete-spot-form').hide()
    $('#update-spot-form').toggle()
  })
  $('#seen').on('click', '.update-spot', () => {
    $('#authenticated-message').hide()
    $('#new-spot-form').hide()
    $('#delete-spot-form').hide()
    $('#update-spot-form').toggle()
  })
  $('#unseen').on('click', '.update-spot', () => {
    $('#authenticated-message').hide()
    $('#new-spot-form').hide()
    $('#delete-spot-form').hide()
    $('#update-spot-form').toggle()
  })
  $('#update-spot-form').on('submit', spotEvents.onUpdateSpot)
})
