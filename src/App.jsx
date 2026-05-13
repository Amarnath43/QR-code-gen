import { useState } from "react";
import QRPreview from "./components/QRPreview";
import ControlsPanel from "./components/ControlsPanel";

function App() {
  const [config, setConfig] = useState({
    data: "https://google.com",
    fgColor: "#000000",
    bodyShape: "square",
    eyeFrameShape: "square",
    eyeBallShape: "square",
    logo: "",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center gap-10">
      
      <ControlsPanel
        config={config}
        setConfig={setConfig}
      />

      <QRPreview config={config} />

    </div>
  );
}

export default App;