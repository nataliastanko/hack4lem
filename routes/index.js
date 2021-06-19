const express = require('express');
const router = express.Router();
const path = require('path');
// const expressLayouts = require('express-ejs-layouts');

var views = __dirname + '/../views/';

router.use('/css', express.static(path.join(__dirname + '/../', 'node_modules/bootstrap/dist/css')));
router.use('/css', express.static(path.join(__dirname + '/../', 'public/css')));
router.use('/js', express.static(path.join(__dirname + '/../', 'node_modules/bootstrap/dist/js')));
router.use('/js', express.static(path.join(__dirname + '/../', 'node_modules/jquery/dist')));
router.use('/js', express.static(path.join(__dirname + '/../', 'public/js')));
router.use('/img', express.static(path.join(__dirname + '/../', 'public/img')));
router.use('/vendors', express.static(path.join(__dirname + '/../', 'public/vendors')));

router.get('/',function(request, response){
  // response.sendFile(path.join(views + 'index.html'));
  response.render('index');
});

router.get('/about',function(request, response){
  // response.render('about', { title: 'About', layout: './layouts/sidebar' })
  response.render('index');
});

router.get('/campaign/:campaign', (request, response) => {
  response.send('campaign: ' + request.params.campaign);
});

module.exports = router;
