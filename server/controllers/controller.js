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
    await sendmsg(messages).catch(error => console.error(error));
        const chatGPTMessage = messages.slice(-1);

return chatGPTMessage
};
