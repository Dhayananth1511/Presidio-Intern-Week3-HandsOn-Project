const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

// ALL task routes are protected by authMiddleware
router.use(authMiddleware);

router.get('/', taskController.getTasks);
router.post('/', taskController.addTask);
router.patch('/:id', taskController.toggleTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
