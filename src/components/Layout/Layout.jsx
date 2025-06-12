// Layout.jsx
// import Header from "./Header";
import Home from "../Home/Home"
import { Outlet } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
// import { GlobalStyle } from "";
import { GlobalStyle } from "../../styles/global";

export default function Layout() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Outlet /> {/* This renders the current page content */}
      <Footer> </Footer>
    </>
  );
}
