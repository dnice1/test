/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import "./App.css";
import TopBanner from "./components/TopBanner";
import Socials from "./components/Socials";
import MainContent from "./components/MainContent";
import Qa from "./components/Qa";
import ContactUs from "./components/ContactUs";
import BottomSection from "./components/BottomSection";
import SwipingGallery from "./components/SwipingGallery";
import styles from "./styles/card.module.css";
import { createTheme } from "@mui/material";
import { ColorLuminance } from "./ColorLuminance";
import { BackDropLayer } from "./BackDropLayer";

//NOTE: DUMMY USER DELETE WHEN DEPLOYING
const rtlID = "61be44dbcb47acadd89ef7cc";
const testID = "61c1915b4d2ff7b40eba9af6";
const ltrID = "61aa12b7b0f308c9372b12d1";
let cardID = rtlID;
/////////////////////////////

let theme = createTheme({});
let backgroundStyle;
const apiURL = "https://dolphincardapiv1.herokuapp.com/api/card/" + cardID;
// eslint-disable-next-line no-unused-expressions

function App() {
  const [cardData, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      setData(data.card);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //Set background and build theme
  cardData
    ? ((backgroundStyle = {
        backgroundColor: "" + cardData.template.bgColor + "",
        backgroundImage: "url(" + cardData.content.images.bgImg + ")",
      }),
      (theme = createTheme({
        direction: cardData?.content.direction,
        palette: {
          text: {
            primary: cardData.template.contentTextColor,
          },
          primary: {
            main: cardData.template.accentColor,
            contrastText: cardData.template.qaTextColor,
          },
          background: {
            paper: cardData.template.glassColor + "80",
            default: cardData.template.glassColor,
          },
        },
        shape: {
          borderRadius: 8,
        },
        components: {
          MuiTextField: {
            styleOverrides: {
              root: {
                width: "80%",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                "&:hover": {
                  backgroundColor: ColorLuminance(
                    cardData.template.accentColor,
                    0.2
                  ),
                },
              },
            },
          },
          MuiFab: {
            styleOverrides: {
              root: {
                textTransform: "none",
                "&:hover": {
                  backgroundColor: ColorLuminance(
                    cardData.template.accentColor,
                    0.2
                  ),
                },
              },
            },
          },
          MuiAccordion: {
            styleOverrides: {
              root: {
                backgroundColor: cardData.template.accentColor,
                padding: 15,
                width: "70%",
                "&$expanded": {
                  borderRadius: 50,
                },
                "&:hover": {
                  backgroundColor: ColorLuminance(
                    cardData.template.accentColor,
                    0.1
                  ),
                },
              },
            },
          },
        },
      })))
    : null;

  return (
    <div className={styles.App} style={backgroundStyle}>
      {!cardData ? (
        BackDropLayer
      ) : (
        <>
          <TopBanner cardData={cardData.content} theme={theme} />
          <Socials cardData={cardData.content} theme={theme} />
          {cardData.content?.mainContent.isActive && (
            <MainContent cardData={cardData.content} theme={theme} />
          )}
          {cardData.content?.Qa.isActive && (
            <Qa qaData={cardData.content?.Qa} theme={theme} />
          )}
          {cardData.content?.gallery?.isActive && (
            <SwipingGallery cardData={cardData.content} theme={theme} />
          )}
          <ContactUs cardData={cardData.content} theme={theme} />
          <BottomSection cardData={cardData.content} theme={theme} />
        </>
      )}
    </div>
  );
}

export default App;
