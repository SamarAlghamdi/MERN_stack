const express= require('express');
const {getAllJokes,getJoke,createJoke,getRandomJoke,updateJoke,deleteJoke} = require('../controllers/jokesControllers');
const router = express.Router();

router.route('/api/jokes').get(getAllJokes)
router.route('/api/jokes/random').get(getRandomJoke)
router.route('/api/jokes/:id').get(getJoke)
router.route('/api/jokes/new').post(createJoke)
router.route('/api/jokes/update/:id').put(updateJoke)
router.route('/api/jokes/delete/:id').delete(deleteJoke)


module.exports = router;