import conversationModel from '../models/conversations.js'

export async function createNewConversation() {
    console.log('creating a new conversation')
    const messagesAfterReset = conversationModel.create(
        {
        messages: {
        "role": "system",
        "content": "You are a helpful assistant."
    }
}
)
    console.log.apply(messagesAfterReset)
    return messagesAfterReset   
}
