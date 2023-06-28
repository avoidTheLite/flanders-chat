# flanders-chat
an Open AI integration to practice connecting to external services


To run:

node server.js

curl --location 'http://localhost:5280/send' \
--header 'Content-Type: application/json' \
--data '{
    "userMessage": "what would you do if I sang you a tune"
}'

create.env in root folder: 
PORT=5280
OPEN_AI_API_KEY=YOURKEY
OPEN_AI_API_URL=https://api.openai.com/v1/chat/completions