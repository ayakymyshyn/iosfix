import React, { useEffect } from "react";
import "./App.css";

// components
import PromInput from "./components/PromInput";
import SubmitBtn from "./components/SubmitBtn";

function App() {
  const setPlatformInfo = () => {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1) {
      if (ua.indexOf("chrome") > -1) {
        document.body.classList.add("chrome");
      } else {
        document.body.classList.add("safari");
      }
    }
  };
  useEffect(() => {
    setPlatformInfo();
    // old school :) 
    var inputBox = document.querySelector(".safari #inputBox");
    if (inputBox) {
      inputBox.addEventListener("focus", function(e) {
        document.body.classList.add("keyboard");
        setTimeout(function() {
          window.scrollTo(0, 0);
        }, 200);
      });
      inputBox.addEventListener("blur", function(e) {
        document.body.classList.remove("keyboard");
      });
    }
  }, []);

  return (
    <div className="App app-container">
      <PromInput />
      <SubmitBtn id="inputBox" />
    </div>
  );
}

export default App;
