
import React from "react";

export default function Hover() {

  function MouseOver(event) {
    event.target.innerHTML = 'Send me an email now!';
  }
  function MouseOut(event) {
    event.target.innerHTML = 'Joegoolic15@gmail.com';
  }
  return (
    <span onMouseOver={MouseOver} onMouseOut={MouseOut}>Joegoolic15@gmail.com</span>
  );
}
