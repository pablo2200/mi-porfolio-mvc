let express = require('express')
let router = express.Router();
let mainController = require('../controllers/mainController.js')


router.get("/", mainController.home);
router.get("/about", mainController.about);

module.exports = router;