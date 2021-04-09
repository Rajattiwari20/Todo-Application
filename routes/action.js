const express = require('express');
const router = express.Router();
const addTaskController = require('../controllers/action_controller');
router.post('/add' , addTaskController.add);

module.exports = router;