import { Router } from 'express';
const router = Router();
import {sendUserMessage, viewtranscript} from '../controllers/controller.js';
import bodyParser from "body-parser";
import messageModel from '../models/messagesdb.js'

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

router.get('/viewtranscriptDB', async (req,res) => {
try {
    const messagefromDB =await messageModel.find({})
    res.json(messagefromDB)
} catch (err) {
res.status(500).json({message:err.message})
}
    
    
})


export default router