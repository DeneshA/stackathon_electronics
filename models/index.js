const mongoose = require('mongoose')
const Model1Schema = require('./model1')
const Model2Schema = require('./model2')

const Model1 = mongoose.model('Model1', Model1Schema)
const Model2 = mongoose.model('Model2', Model2Schema)

module.exports = {
    Model1,
    Model2
}