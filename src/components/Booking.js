import React from "react";
import "aos/dist/aos.css";
import styles from "../styles/card.module.css";
import IconButton from "@mui/material/IconButton";
import { FacebookRounded, WhatsappRounded } from "@mui/icons-material";

const Booking = (props) => {
  const glassMorphColor = {
    backgroundColor: props.colors.glassColor + "80",
    order: 0,
  };
  return (
    <div
      data-aos="fade-up"
      className={`${styles.mainContentContainer} ${styles.glassMorph}`}
      style={glassMorphColor}
    >
      <h1 className={styles.sectionTitle}>בוקינג</h1>
      <div className={styles.mainContent}>
        <IconButton aria-label="delete">
          <FacebookRounded />
          <WhatsappRounded />
        </IconButton>
      </div>
    </div>
  );
};

export default Booking;
