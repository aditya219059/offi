const express = require('express');
const router = express.router();

router.get('/api/notes', (req, res) => {
    res.json([]);
})

module.export = router