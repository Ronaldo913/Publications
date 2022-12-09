var express = require('express');
var router = express.Router();
const publicationsController = require("../controllers/publicationsController");


/* GET home page. */
router.get("/", publicationsController.listarPublications);

module.exports = router;
