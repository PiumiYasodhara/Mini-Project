const { vectorize } = require("../utils/vectorize.js");

exports.vectorizeText = async (req, res) => {
    try {
        vectorize(req.body.text)
            .then((vectorizedText) => {
                res.json({ vectorizedText });
            }).catch((err) => {
                res.status(500).json({ error: err.message });
            });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};