import { useState, useEffect } from "react";
import axios from "axios";
import {
  ChatbotContainer,
  ChatHeader,
  ChatMessages,
  ChatInputRow,
  ChatInput,
  SendButton,
  MessageBubble,
} from "./style";

export default function Assistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/me", { withCredentials: true })
      .then((res) => setUserData(res.data))
      .catch((err) => console.error("Failed to fetch user data", err));
  }, []);

  const sendMessage = async () => {
    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/chat",
        {
          message: input,
          userData,
        },
        { withCredentials: true } // <-- add this
      );
      const botMessage = { role: "bot", content: res.data.response };
      setMessages([...newMessages, botMessage]);
      setInput("");
    } catch (err) {
      // handle error
    }
  };

  return (
    <ChatbotContainer>
      <ChatHeader>BakeBot Chat</ChatHeader>
      <ChatMessages>
        {messages.map((msg, i) => (
          <MessageBubble key={i} role={msg.role}>
            <b>{msg.role === "user" ? "You" : "BakeBot"}:</b> {msg.content}
          </MessageBubble>
        ))}
      </ChatMessages>
      <ChatInputRow>
        <ChatInput value={input} onChange={(e) => setInput(e.target.value)} />
        <SendButton onClick={sendMessage}>Send</SendButton>
      </ChatInputRow>
    </ChatbotContainer>
  );
}
