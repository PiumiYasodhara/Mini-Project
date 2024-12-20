import React, { useState } from 'react';
import './Chatbot.css';
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdOutlineSmartToy } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const Chatbot = () => {
    const [userMessage, setUserMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([
        { message: "Hi there! How can I help you today?", type: "incoming" }
    ]);
    const [showChatbot, setShowChatbot] = useState(false);


    const handleChat = () => {
        if (!userMessage.trim()) return;

        const outgoingMessage = { message: userMessage, type: "outgoing" };
        setChatMessages([...chatMessages, outgoingMessage]);
        setUserMessage("");

        setTimeout(() => {
            const incomingMessage = { message: "Thinking...", type: "incoming" };
            setChatMessages(prevMessages => [...prevMessages, incomingMessage]);

            generateResponse(incomingMessage);
        }, 600);
    };

    

    const toggleChatbot = () => {
        if (showChatbot) {
            setChatMessages([
                { message: "Hi there! How can I help you today?", type: "incoming" }
            ]);
        }
        setShowChatbot(!showChatbot);
    };

    return (
        <div>
            <button className="chatbot-toggler" onClick={toggleChatbot}>
                {showChatbot ? <IoMdClose /> : <BsFillChatRightDotsFill />}
            </button>
            <div className={`chatbot ${showChatbot ? 'show-chatbot' : ''}`}>
                <header>
                    <h2>Chatbot</h2>
                    <span className="close-btn" onClick={toggleChatbot}>
                        <IoMdClose style={{ fontSize: '20px' }} />
                    </span>
                </header>
                <ul className="chatbox">
                    {chatMessages.map((chat, index) => (
                        <li key={index} className={`chat ${chat.type}`}>
                            {chat.type === "incoming" && <MdOutlineSmartToy style={{ fontSize: '20px' }} />}
                            <p>{chat.message}</p>
                        </li>
                    ))}
                </ul>
                <div className="chat-input">
                    <textarea
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        placeholder="Enter a message..."
                        required
                    />
                    <span id="sent_btn" className="material-symbols-outlined" onClick={handleChat}>
                        <IoSend />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
