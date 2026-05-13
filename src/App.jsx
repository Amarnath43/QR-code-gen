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
    <div className="min-h-screen bg-amber-700 ">
      <h1 className="text-3xl font-bold text-center mb-10 pt-10">QR Code Generator</h1>
   <div className="bg-gray-100 items-start justify-center md:gap-20 sm:gap-15 p-10 max-w-7xl mx-auto rounded-2xl shadow-lg sm:flex-row flex-col flex">
      
      <ControlsPanel
        config={config}
        setConfig={setConfig}
      />

      <QRPreview config={config} />

    </div>
    </div>
  );
}

export default App;