import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import I5 from '/home/soham/SE Projects 3/test3/with_phone/client/src/images/I5.png'

const ChatPage = () => {

  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

 const sendMessage = async () => {
    try {
      
      const response = await axios.post('http://localhost:4000/chat', { message });
      if (response.status === 200) {
        setChatHistory([...chatHistory, message]);
        setMessage('');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const fetchAllChats = async () => {
    try {
      const response = await axios.get('http://localhost:4000/getallchats');
      if (response.status === 200) {
        setChatHistory(response.data);
      }
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const clearChats = async () => {
    try {
      const response = await axios.delete('http://localhost:4000/deletechats');
      if (response.status === 200) {
        setChatHistory([]);
      }
    } catch (error) {
      console.error('Error clearing chats:', error);
    }
  };

  const startNewChat = () => {
    setChatHistory([]);
  };



  useEffect(() => {
    fetchAllChats();
  }, []);

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">
      
    <img src={I5} alt="Image not found" style={{ maxWidth: '15%', height: 'auto' }} />
      <p>Legal Assist</p>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/registrationform">
            Registration
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Chatbot
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/chatpage">
                Chat With Us
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/viewchat">
                View chat History
              </a>
            </li>
            
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search" action="https://www.google.com/search" method="get" target="_blank">
    <input
        className="form-control me-2"
        type="search"
        name="q" // Name attribute for the search query parameter
        placeholder="Search on Google"
        aria-label="Search"
    />
    <button className="btn btn-outline-success" type="submit">
        Search
    </button>
</form>

    </div>
  </div>
</nav>
<div className='parent' style={{ backgroundColor: "grey", padding: '20px', minHeight: '500px', position: 'relative' }}>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
          Legal Assist: Hello there! How Can i help you today?
        </div>
        {chatHistory.map((chat, index) => (
  <div key={index} style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
    You: {chat.message}
  </div>
))}

        <div style={{ position: 'absolute', bottom: '10px', left: '20px', right: '20px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={sendMessage}>Send</button>
          <button className="btn btn-danger mt-2" onClick={clearChats}>Clear Chat</button>
          <button className="btn btn-secondary mt-2" onClick={startNewChat} style={{ marginLeft: '10px' }}>New Chat</button>
          <Link to="/viewchat" className="btn btn-secondary mt-2" style={{ marginLeft: '10px' }}>View History</Link>
        </div>
      </div>
  
    </>
  
  );
};

export default ChatPage;
