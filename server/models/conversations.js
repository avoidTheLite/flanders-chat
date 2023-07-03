import {mongoose} from 'mongoose'

const conversationSchema = new mongoose.Schema({
    messages:[{
        type: Array,
        required: true,
        nested:{
            role:{
                type: String,
                required: true
            },
            content:{
                type: String,
                required: true                
            }


        }
    }]
}
)

const conversationModel = mongoose.model('Conversation',conversationSchema)

export default conversationModel