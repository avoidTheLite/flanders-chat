import { Router } from 'express';
const router = Router();
import {controllerFunction1} from '../controllers/controller.js';

router.use((req, res, next) => {
    //pre-route prep
    next()
})

router.get('/route1/:ID', (req,res)=> {
    
    const responseJson = controllerFunction1(req,res)
           
    res.send(responseJson);
})

router.get('/route2', (req,res) => {
    //do something with a static route 
    res.send('/route2 doesnt have a controller, but you can call it anyways...');
})

export default router