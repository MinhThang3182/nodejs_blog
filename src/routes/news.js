const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

router.use('/:slug', newsController.show)
router.use('/', newsController.index) // khong co :slug thi se chay vao /

module.exports = router