const express = require('express')
const router = express.Router()
const {post} = require("../controllers/Post")
const { authMiddelwares } = require('../Middelwares/authMiddelwares')

router.post("/newpost",authMiddelwares,post)

module.exports = router
