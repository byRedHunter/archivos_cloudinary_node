const multer = require('multer')
const path = require('path')

// multer config
exports.multerImage = multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		let ext = path.extname(file.originalname)

		if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
			cb(new Error('File type is not supported'), false)
			return
		}

		cb(null, true)
	},
})

exports.multerPdf = multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		let ext = path.extname(file.originalname)

		if (ext !== '.pdf') {
			cb(new Error('Only accepted PDF file.'), false)
			return
		}

		cb(null, true)
	},
})
