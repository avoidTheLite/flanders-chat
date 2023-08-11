import {mongoose} from 'mongoose'

const reshapingOptions = {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        delete ret._id;
        return ret;
    }

}


const conversationSchema = new mongoose.Schema({
    messages:{
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
    }
}, { toJSON: reshapingOptions}
)

const conversationModel = mongoose.model('Conversation',conversationSchema)

export default conversationModel