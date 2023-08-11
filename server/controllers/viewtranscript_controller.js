import conversationModel from '../models/conversations.js'

export async function viewTranscript(req,res, conversationID) {
    const transcript = await conversationModel.findById(conversationID)
    switch (transcript.messages.length<2){
        case true:
            transcript.messages[0].content = "You have not sent or received any messages with the agent yet. Send a message to begin a conversation."
            return transcript
        case false:
            return transcript

    }

};