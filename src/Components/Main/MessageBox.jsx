import React, { useState, useEffect } from 'react';
import FetchMessages from '../../Utils/Messages/FetchMessages';

const MessageBox = ({ accessToken }) => {
  const [data, setData] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (isOpen) {
        const fetchData = async () => {
            const response = await FetchMessages(accessToken);
            if (response.ok) {
                setData(await response.json());
            }
        };
        fetchData()

        const socket = new WebSocket(`ws://localhost:8001/ws/bot-message/?token=${accessToken}`);

        socket.onopen = () => {
        console.log("WebSocket connection opened");
        };

        socket.onmessage = (event) => {
        const messageData = JSON.parse(event.data);
            setData(prevMessages => [...prevMessages, messageData.data])
        };

        socket.onclose = (event) => {
            console.log("WebSocket connection closed");
        };

        socket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        return () => {
            socket.close();
        };
    }

  }, [accessToken, setData, isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

    function handleSendMessageSubmit(event) {
        event.preventDefault();
        setData(prevMessages => [...prevMessages, data])

        const data = {
            "message": value
        }
        try {
            fetch(`${process.env.REACT_APP_SERVER}bot-messages/create/`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                method: "POST",
                body: JSON.stringify(data)
            })
        } catch(error) {
            console.log(error)
        }
        setValue('')
    }

  return (
    <div>
      <div className="message-box-bar" onClick={toggleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000">
            <path d="M252-419.77h291.85v-30.77H252v30.77Zm0-132.61h456v-30.77H252v30.77ZM252-684h456v-30.77H252V-684ZM104-135.92v-657.7q0-27.78 20.3-48.08 20.3-20.3 48.08-20.3h615.24q27.78 0 48.08 20.3 20.3 20.3 20.3 48.08v453.24q0 27.78-20.3 48.08-20.3 20.3-48.08 20.3H240.08L104-135.92Zm117.38-179.85h566.24q9.23 0 16.92-7.69 7.69-7.69 7.69-16.92v-453.24q0-9.23-7.69-16.92-7.69-7.69-16.92-7.69H172.38q-9.23 0-16.92 7.69-7.69 7.69-7.69 16.92v554.39l73.61-76.54Zm-73.61 0V-818.23-315.77Z"/>
        </svg>
      </div>
        <div style={isOpen?{
            display: 'block'
        }: {display: 'none'}} className="message-box-container">
            <div className='message-box-heading'>
                <img 
                src={require("../../Assets/supermarket.ico")} 
                style={{
                    width: "30px",
                    height: "30px"
                }}
                alt="" 
                />
                <span style={{
                    padding: "10px"
                }}>Supermarket@Bot</span>
            </div>
            <ul>
                {data.map((message, index) => (
                    message.by === "bot" ?
                    <li className='bot' key={index}>
                        <span className='message'>{message.message}</span>
                    </li>
                    : <li className='user' key={index}>
                        <span className='message'>{message.message}</span>
                    </li>
                ))}
            </ul>
            <form className="send-message-container" method="GET" onSubmit={handleSendMessageSubmit} autoComplete="off">
                <div className='message-box-input'>
                    <input
                        id="send-message"
                        className="send-message-bar"
                        type="text"
                        placeholder="send-message"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <button type="submit" className="send-message">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                            <path d="M138-201v-564l662.92 282L138-201Zm50-77 484-206-484-206v157.38L395.85-484 188-435.38V-278Zm0 0v-412 412Z"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default MessageBox;
