const store = require('./../store')

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
        <p class="name"> name: ${index.name}</p>
        <p class="location"> location: ${index.location}</p>
        <p class="notes"> notes: ${index.notes}</p>
        <p class="seen"> seen: ${index.seen}</p>
       </div>
    `
  })
  $('.seen').hide()
  $('.unseen').hide()
  $('#authenticated-message').text('All spots shown!')
  console.log(response)
  $('#all').append(allHtmlText)
  resetForms()
}

const onShowSeenSpotsSuccess = function (response) {
  const allHtmlText = response.spots.map(function (index) {
    return `
        <div class="spot-conatiner">
        <p class="name"> name: ${index.name}</p>
        <p class="location"> location: ${index.location}</p>
        <p class="notes"> notes: ${index.notes}</p>
        <p class="seen"> seen: ${index.seen}</p>
       </div>
    `
  })
  $('.all').hide()
  $('.seen').show()
  $('.unseen').hide()
  $('#authenticated-message').text('Seen spots shown!')
  $('#seen').append(allHtmlText)
  console.log(response.spots.find({ seen: true }))
  resetForms()
}

// errors:
const onCreateNewSpotError = function (error) {
  $('#authenticated-message').text('Error: ', error.responseJSON.message)
}

const onShowAllSpotsError = function (error) {
  $('#authenticated-message').text('Error: ', error.responseJSON.message)
}

module.exports = {
  onNewSpotSuccess,
  onCreateNewSpotSuccess,
  onShowAllSpotsSuccess,
  onShowSeenSpotsSuccess,
  onCreateNewSpotError,
  onShowAllSpotsError
}
