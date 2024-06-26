const express = require('express');
const router = express.router();
const { body, validationResult } = require('express-vaildator');
const User = require('../models/User')

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 2 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter password with minimum length of 5').isLength({ min: 5 })
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'user with this email already exists.' })
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        // .then(user => res.json(user))
        // .catch(err => {console.log(err)
        //     res.json({error: 'User with email already exist', message: err.message})
        // })

        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).json('Sorry some error occured')
    }
})

module.export = router