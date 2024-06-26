const express = require('express');
const router = express.router();
// const User = requrie('../models/User');

router.get('/', (req, res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    res.send(req.body);
})

module.export = router