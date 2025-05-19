const express = require('express');
const router = express.Router();
const { sendPushNotification } = require('../utils/push-service');

// Temporary in-memory store
const subscriptions = [];

function addSubscription(subscription) {
    const exists = subscriptions.some(sub => sub.endpoint === subscription.endpoint);
    if (!exists) {
        subscriptions.push(subscription);
        return true;
    } 

    return false;
}

router.post('/subscribe', (req, res) => {
    console.log('Received subscription request:', req.body);

    const subscription = req.body;
    
    if (addSubscription(subscription)) {
        console.log('=> New subscription added:', subscription);
        res.status(201).json({ message: 'Subscribed' });
    } else {
        console.log('/!\\ Subscription already exists:', subscription.endpoint);
        res.status(200).json({ message: 'Already subscribed' });
    }
});

router.post('/send-notification', async (req, res) => {
    console.log('Received notification request:', req.body);

    const { title, body } = req.body;
    const payload = { title, body };
    console.log('Payload:', payload);
    await Promise.allSettled(
        subscriptions.map(sub => sendPushNotification(sub, payload))
    );

    res.status(200).json({ message: 'Push sent' });
});

module.exports = router;
