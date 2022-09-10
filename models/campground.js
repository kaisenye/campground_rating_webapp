const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// database schema
const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
});

// export the schema/model
module.exports = mongoose.model('Campground', CampgroundSchema);