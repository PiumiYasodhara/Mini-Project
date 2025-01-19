const { Pinecone } = require("@pinecone-database/pinecone");
require("dotenv").config({path: __dirname + '/.env'});

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});
const index = pc.index("hotel-kb");

async function retrieveFromPinecone(vector) {
  //   console.log("-------------index name is ", index);
  const response = await index.query({
    topK: 2,
    vector: vector,
    includeValues: true,
    includeMetadata: true,
    // filter: { genre: { $eq: "action" } },
  });

  console.log(response);

  return response;
}

module.exports = {
  retrieveFromPinecone,
};
