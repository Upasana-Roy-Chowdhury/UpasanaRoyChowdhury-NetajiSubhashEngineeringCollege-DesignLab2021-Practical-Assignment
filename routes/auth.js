const express = require( 'express');
const authController = require('../controller/auth')

const router = express.Router();


router.post( '/', authController.index )


 module.exports = router