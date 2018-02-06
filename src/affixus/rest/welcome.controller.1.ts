let express = require('express');
let router = express.Router();

import { Router, Request, Response } from 'express';
/*const router: Router = Router();
*/

router.get('/', (req:Request, res:Response) => {
    let output = {"message": "Hello World Welcome1!!"};
    res.json(output);
});



export const WelcomeController1 = router;