const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show); // có đằng sau dấu / (:slug) thì sẽ lao vào show()
router.get('/', newsController.index); // khong co :slug thi se chay vao /

module.exports = router;
