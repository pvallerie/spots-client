const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// const onNewSpot = () => $('.authenticated-hidden').show()

const onCreateNewSpot = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createNewSpot(data)
    .then(ui.onCreateNewSpotSuccess)
    .then(ui.onCreateNewSpotError)
}

const onShowAllSpots = function (event) {
  event.preventDefault()
  api.showAllSpots()
    .then(ui.onShowAllSpotsSuccess)
    .then(ui.onShowAllSpotsError)
}

const onShowSeenSpots = function (event) {
  event.preventDefault()
  api.showAllSpots()
    .then(ui.onShowSeenSpotsSuccess)
    .then(ui.onShowSeenSpotsError)
}

const onShowUnseenSpots = function (event) {
  event.preventDefault()
  api.showAllSpots()
    .then(ui.onShowUnseenSpotsSuccess)
    .then(ui.onShowUnseenSpotsError)
}

const onDeleteSpot = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data.spot._id)
  api.deleteSpot(data)
    .then(ui.onDeleteSpotSuccess)
    .then(ui.onDeleteSpotError)
}

const onUpdateSpot = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateSpot(data)
    .then(ui.onUpdateSpotSuccess)
    .then(ui.onUpdateSpotError)
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
