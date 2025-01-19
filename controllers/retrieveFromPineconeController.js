const { retrieveFromPinecone } = require("../utils/retrieve-from-pinecone.js");

exports.retrieveFromPineconeController = async (req, res) => {
    try {
        console.log("Request body is to retrieve From Pinecone Controller: ", req.body);
        retrieveFromPinecone(req.body.text.vectorizedText)
            .then((retrievedVectorAndMetadata) => {
                res.json({ retrievedVectorAndMetadata });
            }).catch((err) => {
                res.status(500).json({ error: err.message });
            });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};