// Header.jsx
// import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Container>
      <div className="brand">BakeBot</div>
      <nav>
        <Link to="/">🧾 Home</Link>
        <Link to="/Assistant">🤖 Chatbot Assistant</Link>
        <Link to="/convert">⚖️ Converter</Link>
      </nav>
      <Link to="/setup" className="button">
        Get Started
      </Link>
    </Container>
  );
}



