import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
    transports: ['websocket'], // Use only WebSocket transport
});

function ChatApp() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Listen for incoming messages
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        // Clean up the socket connection when the component unmounts
        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            // Send the message to the server
            socket.emit('chat message', message);
            setMessage('');
        }
    };

    return (
        <div>
            <div>
                <ul style={{ backgroundColor: "red", width: '100%', height: '400px', overflowY: 'auto' }}>
                    {messages.map((msg, index) => (
                        <li style={{ color: 'black', background: 'white', fontSize: '20px' }} key={index}>{msg}</li>
                    ))}
                </ul>
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatApp;
