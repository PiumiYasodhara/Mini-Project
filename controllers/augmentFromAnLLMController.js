const { augment } = require("../utils/augment.js");

exports.augmentFromAnLLMController = async (req, res) => {
  try {
    console.log("Request body for augmentFromAnLLMCtontroller:", req.body);

    const question = req.body.question; // Ensure your request includes a 'question' field
    const context = req.body.context || ""; // Use provided context

    // Get augmented answer using ChatGPT
    const answer = await augment(question, context);

    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};