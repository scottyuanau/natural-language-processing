//Server Environment Setup

var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');
const { url } = require('inspector');
dotenv.config();

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))


//Server Listening Folder
app.use(express.static('dist'))
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Production app listening on port 8081!')
})


//Get user's input URL
app.post('/postData',postData);
app.get('/getData',getData);

let data = [];
function postData(req,res){
  data.push(req.body);
  res.send({});
}


//Return response data
function getData(req,res){
  getMeaningData()
  .then((data)=>{
    let response = {};
    response.agreement = data.agreement;
    response.confidence = data.confidence;
    response.subjectivity = data.subjectivity;
    response.score_tag = data.score_tag;
    response.txt = data.sentence_list[0].text;
    res.send(response);
  });
}

//Get data from Meaningcloud
const APIKEY = process.env.API_KEY;

async function getMeaningData () {
const formdata = new FormData();
formdata.append("key",APIKEY);
formdata.append("url",data.slice(data.length-1)[0].url);
formdata.append("lang", "auto");
const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};
const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
try {
  let data = await response.json();
  return data;
} catch (error) {
  console.log('error',error);
}
}
