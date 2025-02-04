// At the top of the file, add a new state for chat messages
import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      text:
        "Hello and welcome to Royal Luxury Hotel! ✨\nI’m your virtual assistant. How can I assist you today?",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  // function to add a new message, e.g. the asked question
  const addMessage = (text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now(),
        sender: "user",
        text
      },
    ]);
  };

  const handleClick = async () => {
    const userQuestion = inputMessage; // store the current question
    addMessage(inputMessage); // function to add the message to chatMessages
    setInputMessage(""); // clear the input

    // 0. Insert animated dots placeholder for assistant message
    setMessages(prev => [
      ...prev,
      {
        sender: "assistant",
        text: (
          <span className="flex space-x-1">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-150">.</span>
            <span className="animate-bounce delay-300">.</span>
          </span>
        )
      }
    ]);

    try {
      // 1. Vectorize the user question
      const vecResponse = await axios.post("/vectorize", { text: userQuestion });
      const vector = vecResponse.data;

      // 2. Retrieve the context from Pinecone
      const retrieveResponse = await axios.post("/retrieve", { text: vector });
      const matches = retrieveResponse.data.retrievedVectorAndMetadata.matches;
      let context = "";
      if (matches && matches.length > 0) {
        // Get the top two match texts
        const topMatches = matches.slice(0, 2);
        context = topMatches.map(match => match.metadata.text).join("\n");
      }

      // 3. Call augment endpoint using question and context
      const augmentResponse = await axios.post("/augment", {
        question: userQuestion,
        context: context
      });
      const answer = augmentResponse.data.answer; // assuming response contains the ChatGPT answer in 'answer'

      // 4. Remove animated dots and then Append user question and assistant answer into chatMessages
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages.pop(); // remove the animated dots
        return [
          ...newMessages,
          { sender: "assistant", text: answer }
        ];
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full md:w-1/2 shadow-lg rounded-lg overflow-hidden bg-gray-800 flex flex-col h-[90vh]">
      {/* Chat Header */}
      <div className="bg-gray-700 px-6 py-4 border-b border-gray-600">
        <h1 className="text-xl font-semibold">Royal Lux Hotel-GuestGenius</h1>
      </div>

      {/* Chat Messages Area */}
      <div id="chat-box" className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-md ${msg.sender === "user"
              ? "ml-auto bg-gray-600 text-white rounded-lg text-right w-fit px-2"
              : "bg-[#B3882D] text-black rounded-lg text-left w-fit px-2"
              }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="border-t border-gray-600 flex">
        <input
          type="text"
          name="message"
          placeholder="Type a message..."
          className="w-full p-4 bg-gray-700 text-white outline-none placeholder-gray-400"
          onChange={(e) => {
            setInputMessage(e.target.value);
          }}
          value={inputMessage}
        />
        <button
          type="submit"
          className="bg-[#B3882D] px-6 py-4 text-white hover:bg-blue-600"
          onClick={handleClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;