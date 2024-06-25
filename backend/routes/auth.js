const express = require('express');
const router = express.router();

router.get('/api/auth', (req, res) => {
    res.json([]);
})

module.export = router