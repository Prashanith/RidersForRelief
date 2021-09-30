const express = require("express");
const router = express.Router();
const { sendError, sendResponse } = require("../controllers/common");
var axios = require('axios');

router.post("/distanceMatrix", async(req,res)=>{
    
    const {lat,lng,roughLocationCoordinates} = req.body
    console.log(req.body);
    const config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${lat},${lng}&destinations=${roughLocationCoordinates[0]},${roughLocationCoordinates[1]}&key=${process.env.GMAPS_API_KEY}`,
        
      };

      axios(config)
      .then(function (response) {
        res.json(sendResponse(JSON.stringify(response.data)));
      })
      .catch(function (error) {
        console.log(error);
        res.json(sendError("internal server error"));
      });
    
});
module.exports = router;
