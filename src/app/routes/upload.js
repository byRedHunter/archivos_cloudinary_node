const express = require('express')
const { upoadFile, upload } = require('../controllers/uploadController')

const router = express.Router()
const path = '/upload'

router.post(`${path}`, upload, upoadFile)

module.exports = router
