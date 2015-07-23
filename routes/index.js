var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors: [] });
});

//Autoload de comandos con :quizId
router.param('quizId',						    quizController.load);

router.get('/quizes',							quizController.index);
router.get('/quizes/:quizId',					quizController.show);
router.get('/quizes/:quizId/answer',			quizController.answer);
router.get('/author',							quizController.author);
router.get('/quizes/new',						quizController.new);
router.get('/quizes/create',					quizController.create);
router.get('/quizes/:quizId/edit',			    quizController.edit);
router.get('/quizes/:quizId',					quizController.supdate);

module.exports = router;

