const express = require('express')
const cloudinary = require('../../utils/cloudinary')
const { multerPdf, multerImage } = require('../../utils/multer')
const productModel = require('../models/productModel')
const { route } = require('./user')

const router = express.Router()

const path = '/product'

// 'image' ==> name del input del formulario
router.post(`${path}`, multerImage.single('image'), async (req, res) => {
	try {
		const result = await cloudinary.uploader.upload(req.file.path)

		// create instance of product
		let product = new productModel({
			name: req.body.name,
			avatar: result.secure_url,
			cloudinary_id: result.public_id,
		})

		await product.save()

		res.json(product)
	} catch (error) {
		console.log(error)
	}
})

router.post(`${path}/pdf`, multerPdf.single('pdf'), async (req, res) => {
	try {
		const result = await cloudinary.uploader.upload(req.file.path)

		// create instance of product
		let product = new productModel({
			name: req.body.name,
			avatar: result.secure_url,
			cloudinary_id: result.public_id,
		})

		await product.save()

		res.json(product)
	} catch (error) {
		console.log(error)
	}
})

router.get(`${path}`, async (req, res) => {
	try {
		let products = await productModel.find()

		res.json(products)
	} catch (error) {
		console.log(error)
	}
})

router.delete(`${path}/:id`, async (req, res) => {
	try {
		let product = await productModel.findById(req.params.id)
		await cloudinary.uploader.destroy(product.cloudinary_id)
		await product.remove()

		res.json(product)
	} catch (error) {
		console.log(error)
	}
})

router.put(`${path}/:id`, multerImage.single('image'), async (req, res) => {
	try {
		let product = await productModel.findById(req.params.id)
		await cloudinary.uploader.destroy(product.cloudinary_id)
		const result = await cloudinary.uploader.upload(req.file.path)

		const data = {
			name: req.body.name || product.name,
			avatar: result.secure_url || product.avatar,
			cloudinary_id: result.public_id || product.cloudinary_id,
		}

		product = await productModel.findOneAndUpdate(req.params.id, data, {
			new: true,
		})

		res.json(product)
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
