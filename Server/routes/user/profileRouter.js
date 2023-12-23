const router = require('express').Router();

const profileController = require('../../controllers/profileController');

router.get('/', profileController.getProfile);
router.patch('/:userId', profileController.updateProfile);

module.exports = router;
