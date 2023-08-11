import { Router } from 'express';
const router = Router();
import controllers from '../controllers/index.js';
import bodyParser from "body-parser";
import { createNewConversation } from '../controllers/createnewConversation_controller.js';
import { successFormatter } from '../services/responseAPI.js';
import { errorFormatter } from '../services/responseAPI.js';

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
        const results = responseJson;
        const message = "Successfully sent and received chat with GPT"
        res.send(successFormatter(message, results, 200))
})
})

router.get('/startNewConversation', async (req, res) => {
    try {
        const results = await createNewConversation()
        const message = "Sucessfully began new conversation with included conversationID (id)"
        res.send(successFormatter(message, results, 200))

    } catch(err) {
        res.send(errorFormatter(err.message, 500))

    }

})


router.get('/viewtranscript/:conversationID', async (req,res) => {
    const conversationID = req.params['conversationID'];
    
try {
    const results = await controllers.viewTranscript(req,res, conversationID)
    const message = `Successfully retrieved conversation with conversationID = ${conversationID}`
    res.send(successFormatter(message, results, 200))
} catch (err) {
    const message = `Failed to retrieve conversation with conversationID = ${conversationID}. Details: Server returned ${err.message}`
    res.send(errorFormatter(message, 500))
}
    
    
})


export default router