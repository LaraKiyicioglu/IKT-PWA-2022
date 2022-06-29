const express = require('express');
const webpush = require('web-push');
const router = express.Router();

const publicVapidKey = 'BIfifujhjPS_u-t87dAhTEXnKALUnKXwifqERnU8NvB-RcczEugNO8bJI6VKC8XgsnsPRExdEv2y058_lv6h1cY';
const privateVapidKey = '22ecLfZQwwfi5xdnjfA7M5nDRuvRA6l2DSqzHh76UR4';

router.post('/', async(req, res) => {
    const subscription = req.body;
    console.log('subscription', subscription);
    res.status(201).json({ message: 'subscription received'});

    webpush.setVapidDetails('mailto:freiheit@htw-berlin.de', publicVapidKey, privateVapidKey);
});

module.exports = router;
