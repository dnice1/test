/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../styles/card.module.css";
import { TextField, Button, Paper } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Mail } from "@mui/icons-material";

let contactUsTitle;

const whatsappURL = "#";
const mail = "#";
const phoneNum = "#";
const ContactUs = ({ cardData, theme }) => {
  cardData?.direction === "ltr"
    ? (contactUsTitle = "Contact Me")
    : (contactUsTitle = "צרו קשר");

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper
        data-aos="fade-up"
        className={cardData && `${styles.contactUsForm} ${styles.glassMorph}`}
        style={{
          backgroundColor: theme.palette.background.paper,
          direction: theme.direction,
        }}
      >
        <h1
          className={styles.sectionTitle}
          style={{ color: theme.palette.primary.main }}
        >
          {cardData?.direction === "rtl" ? "צרו קשר" : "Contact Me"}
        </h1>
        <div className={styles.contactUsItem}>
          <p
            className={styles.formLabel}
            style={{ color: theme.palette.primary.main }}
          >
            {cardData?.direction === "rtl" ? "שם מלא:" : "Full Name:"}
          </p>
          <TextField
            id="filled-basic"
            variant="standard"
            sx={{
              backgroundColor: theme.palette.background.default,
            }}
          />
        </div>
        <div className={styles.contactUsItem}>
          <p
            className={styles.formLabel}
            style={{ color: theme.palette.primary.main }}
          >
            {cardData?.direction === "rtl" ? "טלפון:" : "Phone:"}
          </p>
          <TextField
            id="filled-basic"
            variant="standard"
            sx={{
              backgroundColor: theme.palette.background.default,
            }}
          />
        </div>
        <div className={styles.contactUsItem}>
          <p
            className={styles.formLabel}
            style={{ color: theme.palette.primary.main }}
          >
            {cardData?.direction === "rtl" ? "אימייל:" : "Email:"}
          </p>

          <TextField
            id="filled-basic"
            variant="standard"
            sx={{
              backgroundColor: theme.palette.background.default,
            }}
          />
        </div>
        <div className={styles.contactUsItem}>
          <p
            className={styles.formLabel}
            style={{ color: theme.palette.primary.main }}
          >
            {cardData?.direction === "rtl" ? "הודעה:" : "Message:"}
          </p>

          <TextField
            id="filled-basic"
            variant="standard"
            multiline="true"
            rows={3}
            maxRows={3}
            sx={{
              backgroundColor: theme.palette.background.default,
            }}
          />
        </div>

        <Button variant="contained" endIcon={<Mail />} sx={{}}>
          <span>{cardData?.direction === "rtl" ? "שלח" : "Submit"}</span>
        </Button>
      </Paper>
    </ThemeProvider>
  );
};

export default ContactUs;
