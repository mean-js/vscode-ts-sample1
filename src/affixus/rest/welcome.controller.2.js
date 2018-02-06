let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    let output = { "message": "Hello World Welcome2c!!" };
    res.json(output);
});



module.exports = router;