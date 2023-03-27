const express= require('express');
const router= express.Router()
const path=require('path')

// ^ means starting of string and $ means end of string .
// The below expression means only match with '/'
router.get('^/$|/index(.html)?', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})


module.exports=router