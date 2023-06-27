import axios from 'axios';

const API_KEY = process.env.API_KEY
const API_URL = process.env.API_URL


export async function sendmsg(messages) {
    try {
        const response = await axios.post(API_URL, {
            messages:messages,
            max_tokens:50
        }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_KEY}`
            }
    

});

const chatGPTresponse = response.data.choices[0].text;
    console.log(chatGPTresponse);
    messages.push(chatGPTresponse)
    return chatGPTresponse.content
} catch (error) {
    console.error('Error:', error.response.data);
    return
}

}