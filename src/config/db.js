const mongoose = require('mongoose')

const DB_URI =
	'mongodb+srv://curso_mongo:curso_mongo@cluster0.5jx2u.mongodb.net/Mongo?retryWrites=true&w=majority'

module.exports = () => {
	const connect = () => {
		mongoose.connect(
			DB_URI,
			{
				useCreateIndex: true,
				keepAlive: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
			(err) => {
				if (err) {
					console.log('DB: ERROR!!!')
				} else {
					console.log('Conexion correcta!!!')
				}
			}
		)
	}

	connect()
}
