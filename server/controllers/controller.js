import { sendmsg } from "../services/sendMessage.js";


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
    const chatGPTMessage = sendmsg(messages);
    console.log(chatGPTMessage);

return chatGPTMessage
};
