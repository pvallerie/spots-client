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

const deleteSpot = function (data) {
  return $.ajax({
    url: config.apiUrl + '/spots/' + data.spot._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateSpot = function (data) {
  return $.ajax({
    url: config.apiUrl + '/spots/' + data.spot._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  createNewSpot,
  showAllSpots,
  deleteSpot,
  updateSpot
}
