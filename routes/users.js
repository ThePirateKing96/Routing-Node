const express = require('express');
const router = express.Router();

// GET /api/users
router.get('/', (req, res) => {
    res.json({ message: 'User List' });
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Details of user with ID: ${id}` });
});

// PUT /api/users/:id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `User with ID: ${id} updated` });
});

module.exports = router;
