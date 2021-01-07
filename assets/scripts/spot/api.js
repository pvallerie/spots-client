const config = require('./../config')
const store = require('./../store')

const createNewSpot = function (data) {
  return $.ajax({
    url: config.apiUrl + '/spots',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const showAllSpots = function (data) {
  return $.ajax({
    url: config.apiUrl + '/spots',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showSeenSpots = function (data) {
  return $.ajax({
    url: config.apiUrl + '/spots',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createNewSpot,
  showAllSpots,
  showSeenSpots
}
