import styled from "styled-components";

export const ChatbotContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #fdf6f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: "Segoe UI", sans-serif;
  padding: 20px;
  box-sizing: border-box;
`;

export const ChatHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #d2691e;
  text-shadow: 1px 1px 1px #eee;
`;

export const ChatMessages = styled.div`
  flex: 1;
  width: 100%;
  max-width: 600px; /* Reduced from 700px */
  background: #fff;
  border: 2px solid #ffddc1;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  max-height: 500px;
`;

export const MessageBubble = styled.div`
  background: ${({ role }) => (role === "user" ? "#e0f7fa" : "#fff3e0")};
  align-self: ${({ role }) => (role === "user" ? "flex-end" : "flex-start")};
  color: #333;
  border-radius: 14px;
  padding: 10px 15px;
  margin: 10px 0;
  max-width: 80%;
  font-size: 1rem;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.05);
`;

export const ChatInputRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px; /* Reduced from 700px */
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #d2691e;
  border-radius: 14px 0 0 14px;
  outline: none;
`;

export const SendButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  background-color: #d2691e;
  color: white;
  border: none;
  border-radius: 0 14px 14px 0;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #a35017;
  }
`;

