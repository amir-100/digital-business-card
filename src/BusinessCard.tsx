import {
  Card,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Box,
  type SxProps,
  type Theme,
  Grid,
} from "@mui/material";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaRegWindowMaximize,
} from "react-icons/fa";
import type { JSX } from "@emotion/react/jsx-runtime";

// Type for icon button items
type IconButtonItem = {
  icon: JSX.Element;
  label: string;
  href: string;
  color?: string;
  sx?: SxProps<Theme>;
};

export default function BusinessCard() {
  const firstRow: IconButtonItem[] = [
    {
      icon: <FaRegWindowMaximize />,
      label: "כניסה לאתר",
      href: "https://dudimassage.co.il",
      color: "primary",
    },
    {
      icon: <FaWhatsapp />,
      label: "וואטסאפ",
      href: "https://wa.me/972545605508",
      color: "success",
    },
    {
      icon: <FaPhoneAlt />,
      label: "טלפון",
      href: "tel:+972545605508",
      color: "info",
    },
  ];

  const secondRow: IconButtonItem[] = [
    {
      icon: <FaEnvelope />,
      label: "אימייל",
      href: "mailto:dbenyshai@gmail.com",
      color: "error",
    },
    {
      icon: <FaFacebookF />,
      label: "פייסבוק",
      href: "https://facebook.com/dwdy.bn.ysy",
      sx: { color: "#3b5998" },
    },
    {
      icon: <FaInstagram />,
      label: "אינסטגרם",
      href: "https://instagram.com/dudi_ben_yshai",
      sx: { color: "#E1306C" },
    },
  ];

  const renderRow = (row: IconButtonItem[]) => (
    <Grid container spacing={2} justifyContent="space-around" sx={{ mb: 1 }}>
      {row.map(({ icon, label, href, color, sx }, idx) => (
        <Grid key={idx}>
          {/* Fixed-size container to prevent alignment break */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width: 80, minHeight: 100 }}
          >
            <IconButton
              component="a"
              href={href}
              size="large"
              color={color as any}
              sx={{ ...sx, width: 56, height: 56 }}
            >
              {icon}
            </IconButton>
            <Typography
              variant="caption"
              textAlign="center"
              sx={{
                mt: 0.5,
                fontSize: "1.2rem",
                lineHeight: 1,
                wordBreak: "normal",
              }}
            >
              {label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Card
      sx={{
        // maxWidth: 360,
        // width: "fit-content",
        mx: "auto",
        mt: 4,
        p: 2,
        borderRadius: 3,
        border: "#b5c2bc 3px solid",
        boxShadow: 3,
        textAlign: "center",
        bgcolor: "background.paper",
      }}
    >
      {/* Logo */}
      <CardMedia
        component="img"
        image={`${import.meta.env.BASE_URL}logo.png`}
        alt="Logo"
        sx={{
          width: 50,
          height: 50,
          mx: "auto",
          mb: 1,
          objectFit: "fill",
        }}
      />

      {/* Company */}
      <Typography
        variant="subtitle1"
        // color="text.secondary"
        fontWeight="bold"
        gutterBottom
      >
        קליניקה לעיסוי רפואי ושיקומי
      </Typography>

      {/* Profile Image */}
      <CardMedia
        component="img"
        image={`${import.meta.env.BASE_URL}profile.jpeg`}
        alt="Profile"
        sx={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          mx: "auto",
          mb: 2,
        }}
      />

      {/* Name & Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        דודי בן ישי
      </Typography>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        מעסה רפואי
      </Typography>

      {/* Tagline */}
      <Typography variant="body2" gutterBottom>
        מגע ותנועה שמקדמים ריפוי
      </Typography>

      {/* Icon rows */}
      <Box mt={2} mb={2}>
        {renderRow(firstRow)}
        {renderRow(secondRow)}
      </Box>

      {/* Save vCard Button */}
      <Button
        variant="contained"
        color="primary"
        component="a"
        href={`${import.meta.env.BASE_URL}dudib.vcf`}
        download
        fullWidth
        sx={{
          ":hover": {
            color: "white", // keep text color same
          },
        }}
      >
        שמירה באנשי הקשר
      </Button>
    </Card>
  );
}
