const express = require('express');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
    res.status(200);
    res.json({
        httpCode: 200,
        data: {
            data: 'hello',
        },
    });
});

module.exports = router;
