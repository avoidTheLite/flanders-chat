import { Router } from 'express';
const router = Router();
import controllers from '../controllers/index.js';
import bodyParser from "body-parser";
import { createNewConversation } from '../controllers/createnewConversation_controller.js';

var jsonParser = bodyParser.json();

const messages = [
    {
        "role": "system",
        "content": "You are a helpful assistant."
    }
  ];// TODO: REMOVE: needed until we exclusivly pull from DB 
  

router.use((req, res, next) => {
    //pre-route prep
    next()
})

router.post('/send', jsonParser, async (req,res)=>  {  
await controllers.sendUserMessage(req,res, messages)
    .then(function(responseJson){
        const agentResponse = responseJson;

        res.send(JSON.stringify(agentResponse));
})
})

router.get('/startNewConversation', async (req, res) => {
    try {
        const messagesAfterReset = await createNewConversation()
        res.send(messagesAfterReset)

    } catch(err) {
        res.status(500).json({messagesAfterReset:err.message})

    }

})


router.get('/viewtranscript/:conversationID', async (req,res) => {
    const conversationID = req.params['conversationID'];
    
try {
    const messagefromDB = await controllers.viewTranscript(req,res, conversationID)
    res.json(messagefromDB)
} catch (err) {
res.status(500).json({message:err.message})
}
    
    
})


export default router