import React from "react";
import { styles } from "./styles";
import { Box, Grid, Typography, Link } from "@mui/material";
import FooterLogo from "../../../public/footerlogo.jpg";
import FbIon from "../../../public/facebook.png";
import InstaIcon from "../../../public/instagram.png";
import YtIcon from "../../../public/youtube.png";
import Whatsapp from "../../../public/whatsapp.jpeg";
import { useRouter } from "next/router";
import NRImage from "@/components/NRImage";
import {
  AboutData,
  GetApp,
  InformationData,
  UserData,
} from "@/components/json-data/data";
import { CustomContainer } from "@/components/layout";

const Footer = () => {
  const router = useRouter();

  return (
    <Box sx={styles.mainBox}>
      <Grid
        container
        item
        xs={10}
        sm={11.5}
        md={11.5}
        lg={12}
        xl={11}
        sx={styles.mainGrid}
      >
        <Grid item xs={12} sm={3} md={2} lg={2} sx={styles.icon}>
          <Box
            sx={{
              height: 90,
              width: { xs: 150, lg: 200 },
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            <NRImage
              src={FooterLogo}
              alt="NR Logo"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Link
              href="https://www.facebook.com/nrmobilesofficial/"
              target="blank"
            >
              <Box sx={styles.SocialIcon}>
                <NRImage
                  src={FbIon}
                  alt="NR Logo"
                  style={{ borderRadius: "10px" }}
                />
              </Box>
            </Link>
            <Link
              href="https://www.instagram.com/nrmobilesofficial/"
              target="blank"
            >
              <Box sx={styles.SocialIcon}>
                <NRImage
                  src={InstaIcon}
                  alt="NR Logo"
                  style={{ borderRadius: "10px" }}
                />
              </Box>
            </Link>
            <Link href="https://wa.me/923160430485" target="blank">
              <Box sx={styles.SocialIcon}>
                <NRImage
                  src={Whatsapp}
                  alt="NR Logo"
                  style={{ borderRadius: "10px" }}
                />
              </Box>
            </Link>
            <Link href="https://www.youtube.com/@mr.nrtech9997" target="blank">
              <Box sx={styles.SocialIcon}>
                <NRImage
                  src={YtIcon}
                  alt="NR Logo"
                  style={{ borderRadius: "10px" }}
                />
              </Box>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={1.5} md={2} lg={2}>
          <Typography fontSize={"24px"} fontWeight={500}>
            <span style={{ color: "red" }}>A</span>bout
          </Typography>
          {AboutData.map((data) => {
            return (
              <Typography sx={{ paddingTop: "5px" }}>{data.name}</Typography>
            );
          })}
        </Grid>
        <Grid item xs={6} sm={2} md={2} lg={2}>
          <Typography fontSize={"24px"} fontWeight={500}>
            <span style={{ color: "red" }}>I</span>nformation
          </Typography>
          {InformationData.map((data) => {
            return (
              <Typography sx={{ paddingTop: "5px" }}>{data.name}</Typography>
            );
          })}
        </Grid>
        <Grid item xs={6} sm={2} md={2} lg={2}>
          <Typography fontSize={"24px"} fontWeight={500}>
            <span style={{ color: "red" }}>F</span>or User
          </Typography>
          {UserData.map((data) => {
            return (
              <Typography sx={{ paddingTop: "5px" }}>{data.name}</Typography>
            );
          })}
        </Grid>
        <Grid item xs={6} sm={2} md={2} lg={2}>
          <Typography fontSize={"24px"} fontWeight={500}>
            <span style={{ color: "red" }}>G</span>et Your App
          </Typography>
          {GetApp.map((data) => {
            return (
              <Box
                sx={{
                  height: 50,
                  width: { xs: 130, lg: 180 },
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push("/");
                }}
              >
                <NRImage src={data.img} alt="app Icons" />
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
