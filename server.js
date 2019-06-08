const Koa = require('koa');
var Router = require('koa-router');
const serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var controller = require('./src/controllers');
var app = new Koa();
var router = new Router();

app.use(serve('static'));
app.use(bodyParser());

router.get('/searchRepo', controller.searchRepo);//The expected request is a json with name of the repository
router.get('/getContent', controller.getContent); //This will be decided
router.get('/getTopTenPacakges', controller.getTopTenPacakges); //The expected request is a json list with pacakge json

app.use(router.routes());
app.listen(process.env.PORT || 3000, ()=>{
  console.log("started checkin");
  console.log("Listening to local port ",3000);
})