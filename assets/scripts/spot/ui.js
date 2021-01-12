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
  $('#authenticated-message').show()
  $('#authenticated-message').text('New spot created.')
  resetForms()
}

const onShowAllSpotsSuccess = function (response) {
  const allHtmlText = response.spots.reverse().map(function (index) {
    return `
      <div class="spot col-4">
        <p class="name"> name: ${index.name}</p>
        <p class="location"> location: ${index.location}</p>
        <p class="notes"> notes: ${index.notes}</p>
        <p class="seen"> seen: ${index.seen}</p>
        <p class="ID"> ID: ${index._id}</p>
        <button type="button" class="btn btn-outline-success update-spot spot-button" data="${index._id}">Edit</button>
        <button type="button" class="btn btn-outline-success delete-spot spot-button" data="${index._id}">Delete</button>
      </div>
    `
  })
  clear.clearSpotContainers()
  $('.seen').hide()
  $('.unseen').hide()
  $('#authenticated-message').show()
  $('#authenticated-message').text('All spots shown.')
  console.log(response)
  $('#all').append(allHtmlText)
  $('#show-all-spots').addClass('active')
  $('#show-seen-spots').removeClass('active')
  $('#show-unseen-spots').removeClass('active')
  resetForms()
}

const onShowSeenSpotsSuccess = function (response) {
  const allHtmlText = response.spots.reverse().filter(spot => spot.seen === true).map(function (index) {
    return `
        <div class="spot col-4">
          <p class="name"> name: ${index.name}</p>
          <p class="location"> location: ${index.location}</p>
          <p class="notes"> notes: ${index.notes}</p>
          <p class="seen"> seen: ${index.seen}</p>
          <p class="ID"> ID: ${index._id}</p>
          <button type="button" class="btn btn-outline-success update-spot spot-button" data="${index._id}">Edit</button>
          <button type="button" class="btn btn-outline-success delete-spot spot-button" data="${index._id}">Delete</button>
        </div>
    `
  })
  clear.clearSpotContainers()
  $('.all').hide()
  $('.seen').show()
  $('.unseen').hide()
  $('#authenticated-message').show()
  $('#authenticated-message').text('Seen spots shown.')
  $('#seen').append(allHtmlText)
  $('#show-all-spots').removeClass('active')
  $('#show-seen-spots').addClass('active')
  $('#show-unseen-spots').removeClass('active')
  resetForms()
}

const onShowUnseenSpotsSuccess = function (response) {
  const allHtmlText = response.spots.reverse().filter(spot => spot.seen === false).map(function (index) {
    return `
        <div class="spot col-4">
          <p class="name"> name: ${index.name}</p>
          <p class="location"> location: ${index.location}</p>
          <p class="notes"> notes: ${index.notes}</p>
          <p class="seen"> seen: ${index.seen}</p>
          <p class="ID"> ID: ${index._id}</p>
          <button type="button" class="btn btn-outline-success update-spot spot-button" data="${index._id}">Edit</button>
          <button type="button" class="btn btn-outline-success delete-spot spot-button" data="${index._id}">Delete</button>
        </div>
    `
  })
  clear.clearSpotContainers()
  $('.all').hide()
  $('.seen').hide()
  $('.unseen').show()
  $('#authenticated-message').show()
  $('#authenticated-message').text('Unseen spots shown.')
  $('#unseen').append(allHtmlText)
  $('#show-all-spots').removeClass('active')
  $('#show-seen-spots').removeClass('active')
  $('#show-unseen-spots').addClass('active')
  resetForms()
}

const onDeleteSpotSuccess = function (response) {
  $('#authenticated-message').show()
  $('#authenticated-message').text('Spot deleted.')
  $('#delete-spot-form').hide()
  resetForms()
}

const onUpdateSpotSuccess = function (response) {
  $('#authenticated-message').show()
  $('#authenticated-message').text('Spot updated.')
  $('#update-spot-form').hide()
  // events.onShowAllSpots()
  resetForms()
}

// errors:
const onCreateNewSpotError = function (error) {
  $('#authenticated-message').show()
  $('#authenticated-message').text('Error: ', error.responseJSON.message)
}

const onShowAllSpotsError = function (error) {
  $('#authenticated-message').show()
  $('#authenticated-message').text('Error: ', error.responseJSON.message)
}

const onDeleteSpotError = function (error) {
  $('#authenticated-message').show()
  $('#authenticated-message').text(`Error: ${error.responseJSON.message}`)
  resetForms()
}

const onUpdateSpotError = function (error) {
  $('#authenticated-message').show()
  $('#authenticated-message').text(`Error: ${error.responseJSON.message}`)
  resetForms()
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
  onDeleteSpotError,
  onUpdateSpotError
}
