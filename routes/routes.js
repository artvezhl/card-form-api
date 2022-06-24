const express = require('express');
const Model = require('../models/model');

const router = express.Router()

module.exports = router;

router.post('/post', (req, res) => {
    const data = new Model({
        CardNumber: req.body.CardNumber,
        ExpDate: req.body.ExpDate,
        Cvv: req.body.Cvv,
        Amount: req.body.Amount
    })

    try {
        res.status(201).json({
            "RequestId": data._id,
            "Amount": data.Amount
        });
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
