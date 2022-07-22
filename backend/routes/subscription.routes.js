const express = require('express');
const webpush = require('web-push');
const router = express.Router();

const publicVapidKey = 'BIfifujhjPS_u-t87dAhTEXnKALUnKXwifqERnU8NvB-RcczEugNO8bJI6VKC8XgsnsPRExdEv2y058_lv6h1cY';
const privateVapidKey = '22ecLfZQwwfi5xdnjfA7M5nDRuvRA6l2DSqzHh76UR4';
/*const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cTN97JOGfvA:APA91bGTF-Hnp7pED63qSKUb4SEVU5QpiRSbVbB5GTIZCAZfTPG8WHUU8e2PjWWQRof-TE41eLTs3W0c64ycpaYCTzHrSxkvq5CJoddJBPmMd_TtHJuIVrbB6RWVmAGuCTzNwt-IUYLj',
    expirationTime: null,
    keys: {
        p256dh: 'BO42PqsRTJ-sP9oFmLeFKzerybPtMPduEVRpJXbKmlqk1lR2M_Rtr6lXLnz4o-1XeqPGh6AnNgYzrn6t4BLBojo',
        auth: 'zDshw__AepBgbXbSZCCtDg'
    }
};*/

router.post('/', async(req, res) => {
    const subscription = req.body;
    console.log('subscription', subscription);
    res.status(201).json({ message: 'subscription received'});

    webpush.setVapidDetails('mailto:s0574645@htw-berlin.de', publicVapidKey, privateVapidKey);
});

module.exports = router;
