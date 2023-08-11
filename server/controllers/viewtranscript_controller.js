

export function viewtranscript(req,res, messages) {
    const transcript = messages;
    switch (transcript.length<2){
        case true:
            transcript[0].content = "You have not sent or received any messages with the agent yet. Send a message to begin a conversation."
            return transcript
        case false:
            return transcript

    }

};