const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// const onNewSpot = () => $('.authenticated-hidden').show()

const onCreateNewSpot = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createNewSpot(data)
    .then(ui.onCreateNewSpotSuccess)
    .catch(ui.onCreateNewSpotError)
}

const onShowAllSpots = function (event) {
  event.preventDefault()
  api.showAllSpots()
    .then(ui.onShowAllSpotsSuccess)
    .catch(ui.onShowAllSpotsError)
}

const onShowSeenSpots = function (event) {
  event.preventDefault()
  api.showAllSpots()
    .then(ui.onShowSeenSpotsSuccess)
    .catch(ui.onShowSeenSpotsError)
}

const onShowUnseenSpots = function (event) {
  event.preventDefault()
  api.showAllSpots()
    .then(ui.onShowUnseenSpotsSuccess)
    .catch(ui.onShowUnseenSpotsError)
}

// const onDeleteSpot = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.deleteSpot(data)
//     .then(ui.onDeleteSpotSuccess)
//     .catch(ui.onDeleteSpotError)
// }

const onDeleteSpot = function (event) {
  event.preventDefault()
  const data = $(this).data('spot-id')
  api.deleteSpot(data)
    .then(ui.onDeleteSpotSuccess)
    .catch(ui.onDeleteSpotError)
}

const onUpdateSpot = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateSpot(data)
    .then(ui.onUpdateSpotSuccess)
    .catch(ui.onUpdateSpotError)
}

module.exports = {
  // onNewSpot,
  onCreateNewSpot,
  onShowAllSpots,
  onShowSeenSpots,
  onShowUnseenSpots,
  onDeleteSpot,
  onUpdateSpot
}
