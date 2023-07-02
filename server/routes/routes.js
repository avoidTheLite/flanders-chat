import { Router } from 'express';
const router = Router();
import {sendUserMessage, viewtranscript} from '../controllers/controller.js';
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

router.get('/viewtranscript', (req,res) => {

    res.send(viewtranscript(req,res));
    
    
})

export default router