const express = require('express'); 
const {handleGenerateNewShortUrl,GetAnaliticsOfShortId}  = require("../controllers/url"); 

const router = express.Router(); 

router.post('/',handleGenerateNewShortUrl); 
router.get('/analitics/:shortId',GetAnaliticsOfShortId);


module.exports = router ; 