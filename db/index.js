const mongoose = require('mongoose')

mongoose
    // .connect('mongodb://127.0.0.1:27017/electronicsDatabase')
    .connect('mongodb+srv://denesh555:DyzJgVY0HxoDVGlB@cluster0.ctnnmmg.mongodb.net/electronicsDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db