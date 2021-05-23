const userModel = require('../models/userModel')

const options = {
	page: 1,
	limit: 3,
}

exports.getData = async (req, res) => {
	try {
		const docs = await userModel.paginate({}, options)

		res.status(200).json(docs)
	} catch (error) {
		console.log('ERROR CONTROLLER')
	}
}

exports.insertData = async (req, res) => {
	const data = req.body

	try {
		const newUser = await userModel.create(data)

		res.status(200).json(newUser)
	} catch (error) {
		console.log('ERROR INSERT DATA')
		console.log(error)
		res.status(500).json({ message: 'Intentelo más tarde.' })
	}
}
