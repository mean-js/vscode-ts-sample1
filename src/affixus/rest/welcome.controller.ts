import { Router, Request, Response } from 'express';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    let output = {"message": "Hello World Welcome!!"};
    res.json(output);
});

router.get('/:name', (req: Request, res: Response) => {
    let { name } = req.params;
    let output = {"message" : `Hello ${name}`};
    res.json(output);
});


export const WelcomeController: Router = router;