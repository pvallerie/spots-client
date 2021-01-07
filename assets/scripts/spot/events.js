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
  api.showSeenSpots()
    .then(ui.onShowSeenSpotsSuccess)
    .then(ui.onShowSeenSpotsError)
}

module.exports = {
  // onNewSpot,
  onCreateNewSpot,
  onShowAllSpots,
  onShowSeenSpots
}
