const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true},
    genre: { type: String, enum: ['drama', 'action', 'adventure', 'fantasy'] },
    plot: { type: String, maxlength: 250 }
})
//parametros nombre modelo, nombreSchema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
