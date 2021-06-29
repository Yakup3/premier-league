const express = require('express');
const router = express.Router();
const Models = require('../models/model');

// Gets all data
router.get('/', async (req, res) => {
    try {
        const models = await Models.find();
        res.send(models);
    } catch (err) {
        res.send(err);
    }
})

// Gets data by id
router.get('/:id', async (req, res) => {
    try {
        const model = await Models.findById(req.params.id);
        res.send(model);
    } catch (err) {
        res.send(err);
    }
})
// Adds new data
router.post('/', async (req, res) => {
    const model = new Models({
        order: req.body.order,
        name: req.body.name,
        mp: req.body.mp,
        w: req.body.w,
        l: req.body.l,
        gf: req.body.gf,
        ga: req.body.ga,
        pts: req.body.pts
    })

    try {
        const m1 = await model.save();
        res.json(m1);
    } catch (err) {
        res.send(err);
    }
})

// Updates data by id
router.patch('/:id', async (req, res) => {
    try {
        const model = await Models.findById(req.params.id);
        model.order = req.body.order;
        const m1 = await model.save();
        res.json(m1);
    } catch (err) {
        res.send(err);
    }
})

// Deletes data by id
router.delete('/:id', async (req, res) => {
    try {
        const model = await Models.findById(req.params.id);
        await model.delete();
        res.send('Deleted');
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;