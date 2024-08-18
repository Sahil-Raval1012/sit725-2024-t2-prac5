const express = require("express")
const router = express.Router();
const controller = require("..//controllers/route_controller_1");
router.get('/', controller.get);
module.exports = router;