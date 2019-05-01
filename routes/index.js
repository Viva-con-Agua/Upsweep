var express = require('express');
var router = express.Router();

let commentController = require('../controllers/commentController');
let poolEventController = require('../controllers/poolEventController');
let userController = require('../controllers/userController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    message : "welcome to comment-api"
  });
});

router.post('/comment', commentController.post);

router.get('/comment', commentController.findAll);

router.get('/comment/:id', commentController.findOne);

router.put('/comment/:id', commentController.update);

router.delete('/comment/:id', commentController.delete);



router.post('/poolevent', poolEventController.post);

router.get('/poolEvents', poolEventController.getAll);

router.post('/user', userController.post);




module.exports = router;