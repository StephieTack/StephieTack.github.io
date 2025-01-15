import { useState } from "react";
import Navbar from "./Navbar";
export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]"
  }, /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/images/logo.svg",
    width: 40,
    height: 40,
    alt: "Stephanie Tack"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "relative md:justify-self-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "menu-btn md:hidden",
    onClick: () => setNavOpen(prev => !prev)
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-rounded"
  }, navOpen ? "close" : "menu")), /*#__PURE__*/React.createElement(Navbar, {
    navOpen: navOpen
  })), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "btn btn-secondary max-md:hidden md:justify-self-end"
  }, "Contact Me")));
}