import React, { useState } from "react";
import getAnswer from "./getAnswers.js";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm ChatGPT. How can I help you?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");  





  const sendMessage = async () => {
    if (inputValue.trim() === "") {
      return;
    }

    const response = await getAnswer(inputValue);
    setMessages([
      ...messages,
      { text: inputValue, isBot: false },
      { text: response, isBot: true },
    ]);
    setInputValue("");
  };

  return (
    <div className="app-container">
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={message.isBot ? "bot" : "user"}>
            
            {message.text}
          </div>
        ))}
        <div className="input-container">
          <input
            type="text"
            className="input"
            placeholder="Type your message here"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button className="submit-button" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
