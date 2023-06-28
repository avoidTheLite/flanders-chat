import axios from 'axios';



export async function sendmsg(messages) {
    const API_KEY = process.env.OPEN_AI_API_KEY
    const API_URL = process.env.OPEN_AI_API_URL
    const chatGPTresponse = {};
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      };
    
    const data = {
        model: 'gpt-3.5-turbo',
        messages:messages,
        max_tokens:49
    };
    try {
        await axios.post(API_URL, data,{headers})
        .then(function(response){
        const chatGPTresponse = response.data.choices[0].message;
        messages.push(chatGPTresponse)

    });
    return
    }
catch (error) {
    console.error('Error:', error);
    return
}

}