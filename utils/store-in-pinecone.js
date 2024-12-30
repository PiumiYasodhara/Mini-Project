const { Pinecone } = require("@pinecone-database/pinecone");

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});
const index = pc.index("hotel-kb");

async function storeInPinecone(text, vector) {
  //   console.log("-------------index name is ", index);
  const response = await index.upsert([
    {
      id: text,
      values: vector,
      metadata: { text: text },
    },
  ]);
  console.log(response);
}

module.exports = {
  storeInPinecone,
};
