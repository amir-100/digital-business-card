import React, { useContext, useState } from "react";
import {
  Fab,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Box,
} from "@mui/material";

import AccessibleIcon from "@mui/icons-material/Accessible";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ContrastIcon from "@mui/icons-material/Contrast";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import LightModeIcon from "@mui/icons-material/LightMode";
import LinkIcon from "@mui/icons-material/Link";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { AccessibilityContext } from "./AccessibilityContext";

const AccessibilityPanel: React.FC = () => {
  const { settings, update, reset } = useContext(AccessibilityContext);
  const [open, setOpen] = useState(false);

  const togglePanel = () => setOpen((prev) => !prev);

  return (
    <>
      {/* Floating FAB in top-left */}
      <Fab
        color="primary"
        onClick={togglePanel}
        sx={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 2100,
        }}
      >
        <AccessibleIcon sx={{ fontSize: 28 }} />
      </Fab>

      {/* Panel sliding down from top-left */}
      <Box
        sx={{
          position: "fixed",
          top: 70, // below FAB
          left: 20,
          width: 280,
          maxHeight: 400,
          zIndex: 2000,
          overflowY: "auto",
          transition: "transform 0.3s ease, opacity 0.3s ease",
          transform: open ? "translateY(0)" : "translateY(-20px)",
          opacity: open ? 1 : 0,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 2,
            borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.95)",
          }}
        >
          <Typography variant="h6" textAlign="right" sx={{ mb: 1 }}>
            נגישות
          </Typography>

          <List sx={{ direction: "rtl", p: 0 }}>
            <ListItemButton
              onClick={() => update("fontSize", settings.fontSize + 10)}
            >
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="הגדל טקסט" />
            </ListItemButton>

            <ListItemButton
              onClick={() =>
                update("fontSize", Math.max(50, settings.fontSize - 10))
              }
            >
              <ListItemIcon>
                <RemoveIcon />
              </ListItemIcon>
              <ListItemText primary="הקטן טקסט" />
            </ListItemButton>

            <ListItemButton
              onClick={() => update("grayscale", !settings.grayscale)}
            >
              <ListItemIcon>
                <VisibilityOffIcon />
              </ListItemIcon>
              <ListItemText primary="גווני אפור" />
            </ListItemButton>

            <ListItemButton
              onClick={() => update("highContrast", !settings.highContrast)}
            >
              <ListItemIcon>
                <ContrastIcon />
              </ListItemIcon>
              <ListItemText primary="ניגודיות גבוהה" />
            </ListItemButton>

            <ListItemButton
              onClick={() =>
                update("invertedContrast", !settings.invertedContrast)
              }
            >
              <ListItemIcon>
                <InvertColorsIcon />
              </ListItemIcon>
              <ListItemText primary="ניגודיות הפוכה" />
            </ListItemButton>

            <ListItemButton
              onClick={() =>
                update("lightBackground", !settings.lightBackground)
              }
            >
              <ListItemIcon>
                <LightModeIcon />
              </ListItemIcon>
              <ListItemText primary="רקע בהיר" />
            </ListItemButton>

            <ListItemButton
              onClick={() => update("highlightLinks", !settings.highlightLinks)}
            >
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="הדגשת קישורים" />
            </ListItemButton>

            <ListItemButton
              onClick={() => update("readableFont", !settings.readableFont)}
            >
              <ListItemIcon>
                <FontDownloadIcon />
              </ListItemIcon>
              <ListItemText primary="פונט קריא" />
            </ListItemButton>

            <ListItemButton onClick={reset}>
              <ListItemIcon>
                <RestartAltIcon />
              </ListItemIcon>
              <ListItemText primary="איפוס" />
            </ListItemButton>
          </List>
        </Paper>
      </Box>
    </>
  );
};

export default AccessibilityPanel;
