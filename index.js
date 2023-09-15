//import AI and readline
import OpenAI from "openai";
import readline from "readline";

//create new instance of AI
const ai = new OpenAI ({
    organization: "org-ECAN3PQNL9Y6aIax1RrPqWDp",
    apiKey: "DEMO_KEY",
    max_tokens: 30
});

//create interface to send + recieve messages
const ui = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

//user message prompt
ui.prompt();

//send input
ui.on("line", async (input) => {
    //wait for response, log response, prompt for input
    await ai
        .chat.completions.create ({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": input }],
        })
        .then ((res) => {
            console.log(res.choices[0].message.content);
            ui.prompt();
        })
        .catch ((e) => {
            console.log(e);
        }); 
});
