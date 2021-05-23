const multer = require('multer')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'src/uploads')
	},
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`)
	},
})

const upload = multer({ storage: storage })

// myFile -> es el parametro por el cual llega el archivo
exports.upload = upload.single('myFile')

exports.upoadFile = (req, res) => {
	res.send({ data: 'Enviar un archivo' })
}
