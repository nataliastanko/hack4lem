const express = require('express');
const router = express.Router();
const path = require('path');

var views = __dirname + '/../views/';

router.use('/css', express.static(path.join(__dirname + '/../', 'node_modules/bootstrap/dist/css')));
router.use('/js', express.static(path.join(__dirname + '/../', 'node_modules/bootstrap/dist/js')));
router.use('/js', express.static(path.join(__dirname + '/../', 'node_modules/jquery/dist')));
router.use('/css', express.static(path.join(__dirname + '/../', 'public/css')));
router.use('/img', express.static(path.join(__dirname + '/../', 'public/img')));
router.use('/js', express.static(path.join(__dirname + '/../', 'public/js')));
router.use('/vendors', express.static(path.join(__dirname + '/../', 'public/js/vendors')));

console.log(path.join(__dirname + '/../', 'node_modules/bootstrap/dist/css'))

router.get('/',function(request, response){
  response.sendFile(path.join(views + 'index.html'));
});

router.get('/about',function(request, response){
  response.sendFile(path.join(views + 'about.html'));
});

router.get('/campaign/:campaign', (request, response) => {
  response.send('campaign: ' + request.params.campaign);
});

module.exports = router;
