const { OpenAIEmbeddings } = require("@langchain/openai");
require("dotenv").config({path: __dirname + '/.env'});

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error("OpenAI API key is missing");
}

const embeddings = new OpenAIEmbeddings({
  apiKey: openaiApiKey, // In Node.js defaults to process.env.OPEN
  batchSize: 512, // Default value if omitted is 512. Max is 2048
  model: "text-embedding-3-small",
});

async function vectorize(text) {
  const singleVector = await embeddings.embedQuery(text);

  // console.log(singleVector.slice(0, 100));
  return singleVector;
}

module.exports = {
  vectorize,
};
