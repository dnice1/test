import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/card.module.css";
import Fab from "@mui/material/Fab";
import { ThemeProvider } from "@emotion/react";
const BottomSection = ({ cardData, theme }) => {
  return (
    <div className={styles.bottomSection}>
      <p style={{ color: theme.palette.primary.main }}>
        {cardData.direction === "rtl"
          ? "שתפו את כרטיס הביקור שלכם"
          : "Share your business card"}
      </p>
      <div className={styles.bottomSectionContent}>
        <ThemeProvider theme={theme}>
          <Fab color="primary" aria-label="">
            <SocialIcon
              network="whatsapp"
              fgColor="#ffffff"
              bgColor="transparent"
              style={{ height: 60, width: 60 }}
            />
          </Fab>
          <Fab color="primary" aria-label="">
            <SocialIcon
              fgColor={theme.palette.primary.contrastText}
              bgColor="transparent"
              style={{ height: 60, width: 60 }}
            />
          </Fab>
          <Fab color="primary" aria-label="">
            <SocialIcon
              network="email"
              fgColor={theme.palette.primary.contrastText}
              bgColor="transparent"
              style={{ height: 60, width: 60 }}
            />
          </Fab>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default BottomSection;
