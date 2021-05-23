const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const UserShema = new mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	avatar: {
		type: String,
		default: 'https://stovity.com/wp-content/uploads/2018/04/User-icon.png',
	},
})

UserShema.plugin(mongoosePaginate)

module.exports = mongoose.model('User', UserShema)
