const express = require('express');
const router = express.Router();

// GET /api/admin
router.get('/', (req, res) => {
    res.json({ message: 'Admin Dashboard' });
});

// GET /api/admin/stats
router.get('/stats', (req, res) => {
    res.json({ message: 'Admin Statistics' });
});

// POST /api/admin/create
router.post('/create', (req, res) => {
    res.json({ message: 'Admin created a resource' });
});

module.exports = router;
