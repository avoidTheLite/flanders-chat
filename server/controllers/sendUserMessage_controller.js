import { sendmsg } from "../services/sendMessage.js";
import conversationModel from "../models/conversations.js";




export async function sendUserMessage(req, res) {
    const conversationID = req.body.conversationID;
    var messagesFromDB = {};
    // const messagesArrayFromDB = {};
    try{
    messagesFromDB = await conversationModel.findById(conversationID).lean() //TODO: convert DB mesages into JSON object so we can push
    } catch(error){console.log(error)}

    const userResponse = {};
    userResponse.role = "user";
    userResponse.content = req.body.userMessage;
    messagesFromDB.messages.push(userResponse)

    await sendmsg(messagesFromDB.messages).catch(error => console.error(error));

    const chatGPTMessage = messagesFromDB.messages.slice(-1);
    try {
        const updatedMessages = await conversationModel.findByIdAndUpdate(conversationID, messagesFromDB, {new: true});
    } catch (error) {console.log(error)
        
    }
    


return chatGPTMessage
};