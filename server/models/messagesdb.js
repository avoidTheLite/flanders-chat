import {mongoose} from 'mongoose'

const messageSchema = new mongoose.Schema({
            role:{
                type: String,
                required: true
            },
            content:{
                type: String,
                required: true                
            }   
    }
)

const messageModel = mongoose.model('Message',messageSchema)

export default messageModel