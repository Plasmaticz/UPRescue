const express = require('express');
const router = express.Router();

const USERS = { // Place passwords here
    "admin": "password"
};

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (USERS[username] && USERS[username] === password) {
        res.send('success');
    } else {
        res.send('failure');
    }
});


module.exports = router;
