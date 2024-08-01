const shortid = require("shortid");
const { URL } = require("../models/URL");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;

  if (!body.url) return res.status(400).send('<h2>OHHH! you will have to put your URL first </h2>');

  const shortId = shortid();

  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
    createdby: req.user._id,
  });

  return res.status(201).render('home',{ status: "Success", id: shortId });
}



async function GetAnaliticsOfShortId(req,res){
  const shortId = req.params.shortId; 
  const entry = await URL.findOne({shortId});
  return res.json({
    TotalVists : entry.visitHistory.length,
    Timestamps:entry
  });
}

module.exports = { handleGenerateNewShortUrl, GetAnaliticsOfShortId };
