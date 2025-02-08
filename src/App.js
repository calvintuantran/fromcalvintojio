"use client";
import { useState } from "react";

import churroImage from "../src/images/IMG_2075.jpg";
import NakedOne from "../src/images/IMG_1941.jpg";
import NakedTwo from "../src/images/IMG_1931.jpg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "What if I buy you yakult?",
      "What about a matcha latte",
      "PLEASE POOKIE",
      "I am going to die",
      "Yep im dead",
      ":((((",
      "I WILL DO ALL THE DISHES!",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const containerStyle = {
    marginTop: "-4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const yesButtonStyle = {
    fontSize: yesButtonSize,
    marginRight: "1rem",
    borderRadius: "0.375rem",
    backgroundColor: "#38a169",
    padding: "0.5rem 1rem",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const yesButtonHoverStyle = {
    backgroundColor: "#2f855a",
  };

  const noButtonStyle = {
    borderRadius: "0.375rem",
    backgroundColor: "#e53e3e",
    padding: "0.5rem 1rem",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const noButtonHoverStyle = {
    backgroundColor: "#c53030",
  };

  const imageContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  };

  const imageStyle = {
    height: "200px",
  };

  const churroImageStyle = {
    height: "300px",
  };

  const textStyle = {
    marginTop: "2.5rem",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
  };

  const subTextStyle = {
    marginTop: "1rem",
    fontSize: "1.25rem",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      {yesPressed ? (
        <>
          <div style={{ ...containerStyle, minHeight: "100vh" }}>
            <div style={imageContainerStyle}>
              <img
                style={{ ...imageStyle, transform: "rotate(90deg)" }}
                src={NakedOne}
                alt="Naked One"
              />
              <img
                style={{ ...imageStyle, marginTop: "1.75rem", marginBottom: "1.75rem" }}
                src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                alt="Bear Kiss"
              />
              <img
                style={{ ...imageStyle, transform: "rotate(90deg)" }}
                src={NakedTwo}
                alt="Naked Two"
              />
            </div>

            <div style={textStyle}>
              WOOOOOO!!! Let's go grab matcha and fuck raw!! ;))
            </div>
          </div>
        </>
      ) : (
        <>
          <img style={churroImageStyle} src={churroImage} alt="Churro" />
          <img
            style={{ height: "200px" }}
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Bear Roses"
          />
          <h1 style={textStyle}>Will you be my Valentine?</h1>
          <h6 style={subTextStyle}>From Calvin to Jio (my Pogi)</h6>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              style={yesButtonStyle}
              onClick={() => setYesPressed(true)}
              onMouseEnter={(e) => (e.target.style.backgroundColor = yesButtonHoverStyle.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#38a169")}
            >
              Yes
            </button>
            <button
              style={noButtonStyle}
              onClick={handleNoClick}
              onMouseEnter={(e) => (e.target.style.backgroundColor = noButtonHoverStyle.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#e53e3e")}
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
