import { Router } from 'express';
const router = Router();
import {sendUserMessage} from '../controllers/controller.js';
import bodyParser from "body-parser";

var jsonParser = bodyParser.json();

router.use((req, res, next) => {
    //pre-route prep
    next()
})

router.post('/send', jsonParser, async (req,res)=>  {
  
await sendUserMessage(req,res)
    .then(function(responseJson){
        const agentResponse = responseJson;
        res.send(JSON.stringify(agentResponse));
})
})

router.get('/route2', (req,res) => {
    //do something with a static route 
    res.send('/route2 doesnt have a controller, but you can call it anyways...');
})

export default router