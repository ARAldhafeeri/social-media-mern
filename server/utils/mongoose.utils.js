const mongoose = require("mongoose");

const isValidMongooseId = (id) => {
    return mongoose.Types.ObjectId.isValid(id)

};

module.exports = { isValidMongooseId };