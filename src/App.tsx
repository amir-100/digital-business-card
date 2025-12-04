import { AccessibilityProvider } from "./AccessibilityContext";
import AccessibilityPanel from "./AccessibilityPanel";
import "./App.css";
import BusinessCard from "./BusinessCard";

function App() {
  return (
    <AccessibilityProvider>
      <AccessibilityPanel />
      <BusinessCard />
    </AccessibilityProvider>
  );
}

export default App;
