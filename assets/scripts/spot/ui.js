const store = require('./../store')
const events = require('./events')
const clear = require('./../clearing-functions')

const resetForms = function () {
  $('form').trigger('reset')
}

// successes:
const onNewSpotSuccess = function () {
  $('.authenticated-hidden').show()
}

const onCreateNewSpotSuccess = function (response) {
  $('#new-spot-form').hide()
  $('#authenticated-message').text('New spot created!')
  resetForms()
}

const onShowAllSpotsSuccess = function (response) {
  const allHtmlText = response.spots.map(function (index) {
    return `
      <div class="spot-conatiner">
        <p>--------------</p>
        <p class="name"> name: ${index.name}</p>
        <p class="location"> location: ${index.location}</p>
        <p class="notes"> notes: ${index.notes}</p>
        <p class="seen"> seen: ${index.seen}</p>
        <p class="ID"> ID: ${index._id}</p>
       </div>
    `
  })
  clear.clearSpotContainers()
  $('.seen').hide()
  $('.unseen').hide()
  $('#authenticated-message').text('All spots shown!')
  console.log(response)
  $('#all').append(allHtmlText)
  resetForms()
}

const onShowSeenSpotsSuccess = function (response) {
  const allHtmlText = response.spots.filter(spot => spot.seen === true).map(function (index) {
    return `
        <div class="spot-conatiner">
          <p>--------------</p>
          <p class="name"> name: ${index.name}</p>
          <p class="location"> location: ${index.location}</p>
          <p class="notes"> notes: ${index.notes}</p>
          <p class="seen"> seen: ${index.seen}</p>
          <p class="ID"> ID: ${index._id}</p>
       </div>
    `
  })
  clear.clearSpotContainers()
  $('.all').hide()
  $('.seen').show()
  $('.unseen').hide()
  $('#authenticated-message').text('Seen spots shown!')
  $('#seen').append(allHtmlText)
  resetForms()
}

const onShowUnseenSpotsSuccess = function (response) {
  const allHtmlText = response.spots.filter(spot => spot.seen === false).map(function (index) {
    return `
        <div class="spot-conatiner">
          <p>--------------</p>
          <p class="name"> name: ${index.name}</p>
          <p class="location"> location: ${index.location}</p>
          <p class="notes"> notes: ${index.notes}</p>
          <p class="seen"> seen: ${index.seen}</p>
          <p class="ID"> ID: ${index._id}</p>
       </div>
    `
  })
  clear.clearSpotContainers()
  $('.all').hide()
  $('.seen').hide()
  $('.unseen').show()
  $('#authenticated-message').text('Seen spots shown!')
  $('#unseen').append(allHtmlText)
  resetForms()
}

const onDeleteSpotSuccess = function (response) {
  $('#authenticated-message').text('Spot deleted!')
  // events.onShowAllSpots()
  resetForms()
}

const onUpdateSpotSuccess = function (response) {
  $('#authenticated-message').text('Spot updated!')
  $('#update-spot-form').hide()
  // events.onShowAllSpots()
  resetForms()
}

// errors:
const onCreateNewSpotError = function (error) {
  $('#authenticated-message').text('Error: ', error.responseJSON.message)
}

const onShowAllSpotsError = function (error) {
  $('#authenticated-message').text('Error: ', error.responseJSON.message)
}

const onDeleteSpotError = function (error) {
  $('#authenticated-message').text('Error: ', error.responseJSON.message)
}

module.exports = {
  onNewSpotSuccess,
  onCreateNewSpotSuccess,
  onShowAllSpotsSuccess,
  onShowSeenSpotsSuccess,
  onShowUnseenSpotsSuccess,
  onDeleteSpotSuccess,
  onUpdateSpotSuccess,
  onCreateNewSpotError,
  onShowAllSpotsError,
  onDeleteSpotError
}
