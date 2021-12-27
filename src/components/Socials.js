import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/card.module.css";
import { Paper, ThemeProvider } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import Fab from "@mui/material/Fab";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

const socialName = (item, theme) => {
  let res;
  switch (item.name) {
    case "facebook":
      theme.direction === "rtl" ? (res = "פייסבוק") : (res = "Facebook");
      break;
    case "whatsapp":
      theme.direction === "rtl" ? (res = "וואטסאפ") : (res = "Whatsapp");
      break;
    case "linkedin":
      theme.direction === "rtl" ? (res = "לינקדאין") : (res = "Linkedin");
      break;
    case "instagram":
      theme.direction === "rtl" ? (res = "אינסטגרם") : (res = "Instagram");
      break;
    case "tiktok":
      theme.direction === "rtl" ? (res = "טיקטוק") : (res = "Tiktok");
      break;
    case "telegram":
      theme.direction === "rtl" ? (res = "טלגרם") : (res = "Telegram");
      break;
    case "email":
      theme.direction === "rtl" ? (res = "אימייל") : (res = "Email");
      break;
    default:
      break;
  }
  return res;
};

const Socials = ({ cardData, theme }) => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  const socialStyle = {
    backgroundColor: theme?.palette?.background?.paper,
    direction: theme?.direction,
  };
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Paper
          data-aos="fade-in"
          data-aos-once="true"
          className={
            cardData?.socials
              ? `${styles.socials} ${styles.glassMorph}`
              : styles.hidden
          }
          sx={socialStyle}
        >
          {cardData?.socials?.content?.map(
            (item, index) =>
              item.isActive && (
                <li key={index}>
                  <Fab
                    className={styles.socialsItem}
                    color="primary"
                    aria-label=""
                    variant="extended"
                    href={item.url}
                    sx={{ padding: "20px", margin: "5px" }}
                    size="large"
                  >
                    <p>{socialName(item, theme)}</p>
                    {
                      <SocialIcon
                        network={item.name}
                        bgColor="transparent"
                        fgColor={theme?.palette.primary.contrastText}
                        style={{ height: 45, width: 45 }}
                      ></SocialIcon>
                    }
                  </Fab>
                </li>
              )
          )}
        </Paper>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Socials;
