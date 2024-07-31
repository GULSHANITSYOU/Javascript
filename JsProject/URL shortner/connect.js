const mongoose = require('mongoose') ; 

async function connectToMongoDB(URL){
    return mongoose.connect(URL);
}

module.exports = {connectToMongoDB}