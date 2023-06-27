import { sendmsg } from "../services/sendMessage.js";
const messages = [
    {
        "role": "system",
        "content": "You are a helpful assistant."
    }
  ]; // move this to a startup script
export function sendUserMessage(req, res) {
   
    const userResponse = {};
    userResponse.role = "user";
    userResponse.content = req.body.userMessage
    console.log(userResponse)
    messages.push(userResponse);
    console.log(messages)
    // chatGPTMessage = sendmsg(messages);

return responseOutput
};
