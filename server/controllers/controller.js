import { sendmsg } from "../services/sendMessage.js";
import messageModel from '../models/messagesdb.js'


const messages = [
    {
        "role": "system",
        "content": "You are a helpful assistant."
    }
  ]; // move this to a startup script

export async function sendUserMessage(req, res) {

    const userResponse = {};
    userResponse.role = "user";
    userResponse.content = req.body.userMessage;
    messages.push(userResponse);
    await sendmsg(messages).catch(error => console.error(error));
        const chatGPTMessage = messages.slice(-1);
        const lastAgentMessage = new messageModel(chatGPTMessage[0])
        try{            
            const saveAgentMessage = await lastAgentMessage.save()
        } catch(error){console.log(error)}

return chatGPTMessage
};


export function viewtranscript(req,res) {
    const transcript = messages;
    switch (transcript.length<2){
        case true:
            transcript[0].content = "You have not sent or received any messages with the agent yet. Send a message to begin a conversation."
            return transcript
        case false:
            return transcript

    }

};
