const express = require( 'express');

const router = express.Router();


router.get( '/', (req,res) => {
   return  res.render('index');
});


router.get( '/final', (req,res) => {
   return  res.render('final');
});
 module.exports = router