import React, { createContext, useEffect, useState } from "react";

export interface AccessibilitySettings {
  fontSize: number;
  grayscale: boolean;
  highContrast: boolean;
  invertedContrast: boolean;
  lightBackground: boolean;
  highlightLinks: boolean;
  readableFont: boolean;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  update: (key: keyof AccessibilitySettings, value: any) => void;
  reset: () => void;
}

export const AccessibilityContext = createContext<AccessibilityContextType>({
  settings: {
    fontSize: 100,
    grayscale: false,
    highContrast: false,
    invertedContrast: false,
    lightBackground: false,
    highlightLinks: false,
    readableFont: false,
  },
  update: () => {},
  reset: () => {},
});

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem("accessibility");
    return saved
      ? (JSON.parse(saved) as AccessibilitySettings)
      : {
          fontSize: 100,
          grayscale: false,
          highContrast: false,
          invertedContrast: false,
          lightBackground: false,
          highlightLinks: false,
          readableFont: false,
        };
  });

  useEffect(() => {
    localStorage.setItem("accessibility", JSON.stringify(settings));

    document.documentElement.style.fontSize = settings.fontSize + "%";

    document.body.classList.toggle("grayscale", settings.grayscale);
    document.body.classList.toggle("high-contrast", settings.highContrast);
    document.body.classList.toggle("inverted-contrast", settings.invertedContrast);
    document.body.classList.toggle("light-background", settings.lightBackground);
    document.body.classList.toggle("highlight-links", settings.highlightLinks);
    document.body.classList.toggle("readable-font", settings.readableFont);
  }, [settings]);

  const update = (key: keyof AccessibilitySettings, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => {
    setSettings({
      fontSize: 100,
      grayscale: false,
      highContrast: false,
      invertedContrast: false,
      lightBackground: false,
      highlightLinks: false,
      readableFont: false,
    });
  };

  return (
    <AccessibilityContext.Provider value={{ settings, update, reset }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
