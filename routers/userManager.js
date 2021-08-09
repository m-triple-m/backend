const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.get("/home", (req, res) => {
    console.log('request at user home');
    res.send('request processed at home');
})

router.post("/add", (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then(() => {
            console.log('user data saved');
            res.json({ message: 'success' });
        })
        .catch((err) => {
            console.error(err);
            res.json(err);
        })
})

router.get("/getbyemail/:useremail", (req, res) => {

    Model.findOne({ email: req.params.useremail })
        .then((data) => {
            console.log('user data saved');
            res.json(data);
        })
        .catch((err) => {
            console.error(err);
            res.json(err);
        })
})


router.get("/getbyid/:userid", (req, res) => {

    Model.find({ user: req.params.userid })
        .then((data) => {
            console.log('user data saved');
            res.json(data);
        })
        .catch((err) => {
            console.error(err);
            res.json(err);
        })
})


module.exports = router;