import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
import { useState } from "react";
import axios from "axios";

const ChatApp = () => {
  const [lastHumanMessage, setLastHumanMessage] = useState(null);
  const [messegeSent, setMessegeSent] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  const [retrievedPineconeData, setRetrievedPineconeData] = useState({});

  const handleClick = async () => {
    setLastHumanMessage(inputMessage);
    setInputMessage("");
    setMessegeSent(true);

    //   vectorize(inputMessage)
    //     .then((vector) => {
    //       console.log("Retrieved vector is: ", vector);
    //       // retrieveFromPinecone(vector).then((data) => {
    //       //   setRetrievedPineconeData(data);
    //       //   console.log("Retrieved data: ", data);
    //       // });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  };

  useEffect(() => {
    try {
      axios.post("/vectorize", { text: inputMessage })
      .then((response) => {
        console.log("human message vectorized:", response.data);

        axios.post("/retrieve", { text: response.data }).
        then((response) => {
          console.log("Retrieved data: ", response.data);
        }).catch((error) => {
          console.error(error);
        });

      }).catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  }, [lastHumanMessage]);

  return (
    <div class="w-full md:w-1/2 shadow-lg rounded-lg overflow-hidden bg-gray-800 flex flex-col h-[90vh]">
      {/* <!-- Chat Header --> */}
      <div class="bg-gray-700 px-6 py-4 border-b border-gray-600">
        <h1 class="text-xl font-semibold">Royal Lux Hotel-GuestGenius</h1>
      </div>

      {/* <!-- Chat Messages Area --> */}
      <div id="chat-box" class="flex-1 overflow-y-auto p-6 space-y-4">
        {/* <!-- Example Messages --> */}
        <div class="flex items-start">
          <div class="bg-[#B3882D] text-black p-3 rounded-lg">
            <p>
              Hello and welcome to Royal Luxury Hotel! ✨<br /> I’m your virtual
              assistant. How can I assist you today?
            </p>
          </div>
        </div>

        {messegeSent == true && (
          <div class="flex items-start justify-end">
            <div class="bg-[#F4E1C1] text-black p-4 rounded-lg">
              <p>{lastHumanMessage}</p>
            </div>
          </div>
        )}
      </div>

      {/* <!-- Input Section --> */}
      <div class="border-t border-gray-600 flex">
        <input
          type="text"
          name="message"
          placeholder="Type a message..."
          class="w-full p-4 bg-gray-700 text-white outline-none placeholder-gray-400"
          onChange={(e) => {
            setInputMessage(e.target.value);
            console.log(e.target.value);
          }}
          value={inputMessage}
        />
        <button
          type="submit"
          class="bg-[#B3882D] px-6 py-4 text-white hover:bg-blue-600"
          onClick={() => handleClick()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;


// Use ReactDOM.createRoot instead of ReactDOM.render
// const rootElement = document.getElementById("react-root");
// const root = ReactDOM.createRoot(rootElement);
// root.render(<ChatApp />);
