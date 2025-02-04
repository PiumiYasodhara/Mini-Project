const OpenAI = require('openai');
require("dotenv").config({ path: __dirname + '/.env' });

const openaiApiKey = process.env.OPENAI_API_KEY;
if (!openaiApiKey) {
    throw new Error("OpenAI API key is missing");
}

const client = new OpenAI({
    apiKey: openaiApiKey, // This is the default and can be omitted
});

async function augment(question, context) {
    const messages = [
        { role: "system", content: "You are a helpful hotel assistant. answer questions asked by guest using the context as possible. If an irrelevent question, send nothing. Be short and sweet." },
        { role: "user", content: `User question: ${question}\n\nContext:\n${context}` },
    ];

    try {
        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: messages,
        });

        if (!response.choices || response.choices.length === 0) {
            return "I am sorry, I cannot answer that question right now.";
        }

        console.log("Chat completion response:", response.choices[0]);
    
        const answer = response.choices[0].message.content.trim();
        return answer;

    } catch (error) {
        console.error("Error during chat completion:", error);
        throw error;
    }

}

module.exports = {
    augment,
};