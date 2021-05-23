const express = require('express')
const { getData, insertData } = require('../controllers/userController')

const router = express.Router()

const path = '/user'

router.get(`${path}`, getData)
router.post(`${path}`, insertData)

module.exports = router
