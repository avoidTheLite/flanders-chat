import { sendmsg } from "../services/sendMessage.js";

export function sendUserMessage(req, res, messages) {
   
    const userResponse = {};
    userResponse.role = "user";
    userResponse.content = req.body.userMessage
    messages.push(userResponse);
    chatGPTMessage = sendmsg(messages);

return responseOutput
};
