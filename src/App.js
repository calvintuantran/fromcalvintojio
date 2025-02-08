"use client";
import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";

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

  return (
    <Box
      sx={{
        marginTop: "-4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      {yesPressed ? (
        <Box sx={{ minHeight: "100vh" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <img
              style={{ height: "200px", transform: "rotate(90deg)" }}
              src={NakedOne}
              alt="Naked One"
            />
            <img
              style={{
                height: "200px",
                marginTop: "1.75rem",
                marginBottom: "1.75rem",
              }}
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Bear Kiss"
            />
            <img
              style={{ height: "200px", transform: "rotate(90deg)" }}
              src={NakedTwo}
              alt="Naked Two"
            />
          </Box>

          <Typography variant="h4" sx={{ mt: 6.5 }}>
            WOOOOOO!!! Let's go grab matcha and go fuck raw!! ;))
          </Typography>
        </Box>
      ) : (
        <>
          <img style={{ height: "300px" }} src={churroImage} alt="Churro" />
          <img
            style={{ height: "200px" }}
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Bear Roses"
          />
          <Typography variant="h3" sx={{ mt: 2.5, fontWeight: "bold" }}>
            Will you be my Valentine?
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            From Calvin to Jio (my Pogi)
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                fontSize: yesButtonSize,
                padding: "0.5rem 1rem",
                fontWeight: "bold",
                transition: "background-color 0.3s",
                backgroundColor: "#66bb6a", // A softer, prettier green
                "&:hover": {
                  backgroundColor: "#81c784", // Lighter green on hover
                },
              }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{
                padding: "0.5rem 1rem",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onClick={handleNoClick}
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
