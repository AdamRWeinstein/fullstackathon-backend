const express = require("express")
const router = express.Router()

const ridesCtrl = require('../controllers/rides')

router.get("/", ridesCtrl.index);

router.post("/", ridesCtrl.create);

router.get("/:id", ridesCtrl.show);

// router.delete("/:id", ridesCtrl.delete);

// router.put("/:id", ridesCtrl.update);

module.exports = router