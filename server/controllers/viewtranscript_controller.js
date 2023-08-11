import conversationModel from '../models/conversations.js'

export async function viewTranscript(req,res, conversationID) {
    var result = {}
    const transcript = await conversationModel.findById(conversationID)
    switch (transcript.messages.length<2){
        case true:
           result = "You have not sent or received any messages with the agent yet. Send a message to begin a conversation."
            return result
        case false:
            result = transcript
            return result

    }

};