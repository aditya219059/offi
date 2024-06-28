const express = require('express');
const router = express.router();
const fetchuser = require('../middleware/fetchUser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-vaildator');

// 1. fetch all notes.
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.findOne({ user: req.user.id });
        res.json(notes);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json('Internal server error')
    }
})

// 2. Add new note.
router.post('/addnote', fetchuser, [
    body('title', 'Minimum 3 length').isLength({ min: 3 }),
    body('description', 'Minimum 5 length').isLength({ min: 5 })
], async (req, res) => {
    try {


        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const snote = await note.save();

        res.json(snote);
    } catch (error) {
        console.error(error.message);
        res.status(500).json('Internal server error')
    }
})

module.export = router