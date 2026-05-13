import { useState, useRef } from "react";
import Accordion from "./Accordian";
import { validateUrl } from "../helper/validtateUrl";

function ControlsPanel({ config, setConfig }) {

    const [openSection, setOpenSection] = useState("content");
    const [urlError, setUrlError] = useState("");
    const [inputValue, setInputValue] = useState(config.data);
    const fileInputRef = useRef(null);

    const bodyShapes = [
        "square",
        "dots",
        "rounded",
        "classy-rounded",
    ];

    const eyeFrameShapes = [
        "square",
        "dot",
        "rounded",
        "extra-rounded",
    ];

    const eyeBallShapes = [
        "square",
        "dot",
        "rounded",
        "extra-rounded",
    ];

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            setConfig((prev) => ({
                ...prev,
                logo: reader.result,
            }));
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="w-full lg:w-2/5 ">

            {/* ENTER CONTENT */}
            <Accordion
                title="Enter Content"
                isOpen={openSection === "content"}
                onClick={() => setOpenSection(openSection === "content" ? null : "content")}
            >
                <label className="block mb-2 font-medium">
                    Website URL
                </label>

                <input
                    type="text"
                    placeholder="https://example.com"
                    value={inputValue}
                    onChange={(e) => {

                        const url = e.target.value.trim();

                        setInputValue(url);

                        // Empty input
                        if (!url) {

                            setUrlError("");

                            setConfig((prev) => ({
                                ...prev,
                                data: "",
                            }));

                            return;
                        }

                        // Invalid URL
                        if (!validateUrl(url)) {

                            setUrlError("Please enter a valid URL");

                            return;
                        }

                        // Valid URL
                        setUrlError("");

                        setConfig((prev) => ({
                            ...prev,
                            data: url,
                        }));

                    }}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none"
                />
                {urlError && <p className="text-red-500 text-sm mt-1">{urlError}</p>}
            </Accordion>

            {/* COLORS */}
            <Accordion
                title="Set Colors"
                isOpen={openSection === "colors"}
                onClick={() => setOpenSection(openSection === "colors" ? null : "colors")}
            >
                <label className="block mb-2 font-medium">
                    Foreground Color
                </label>

                <input
                    type="color"
                    value={config.fgColor}
                    onChange={(e) =>
                        setConfig((prev) => ({
                            ...prev,
                            fgColor: e.target.value,
                        }))
                    }
                    className="w-20 h-12 cursor-pointer"
                />

            </Accordion>

            {/* LOGO */}
            <Accordion
                title="Add Logo Image"
                isOpen={openSection === "logo"}
                onClick={() =>
                    setOpenSection(
                        openSection === "logo" ? null : "logo"
                    )
                }
            >
            {
                config.logo ? (
                        <img src={config.logo} alt="Logo" className="w-20 h-auto" />
                ): <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center">No Logo</div>
            }

              
                    <input
                    ref={fileInputRef}
                    type="file"
                    id='logo-upload'
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                />
                <div className="flex mt-5 gap-2">
                    <label htmlFor="logo-upload" className="bg-green-700 py-1.5 px-3  rounded text-white">Upload File</label>

                {
                    config.logo && (
                        <button
                            onClick={() => {

                                setConfig((prev) => ({
                                    ...prev,
                                    logo: "",
                                }));

                                fileInputRef.current.value = "";

                            }}
                            className="bg-red-500 text-white py-1.5 px-3 rounded-lg hover:bg-red-600 transition"
                        >
                            Remove Logo
                        </button>
                    )
                }
                </div>

            </Accordion>

            {/* DESIGN */}
            <Accordion
                title="Customize Design"
                isOpen={openSection === "design"}
                onClick={() => setOpenSection(openSection === "design" ? null : "design")}
            >

                {/* BODY SHAPE */}
                <div>
                    <label className="block mb-3 font-medium">
                        Body Shape
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                        {bodyShapes.map((shape) => (
                            <button
                                key={shape}
                                onClick={() =>
                                    setConfig((prev) => ({
                                        ...prev,
                                        bodyShape: shape,
                                    }))
                                }
                                className={`
                  border rounded-lg px-4 py-2 capitalize transition
                  ${config.bodyShape === shape
                                        ? "bg-black text-white"
                                        : "bg-white"
                                    }
                `}
                            >
                                {shape}
                            </button>
                        ))}
                    </div>
                </div>

                {/* EYE FRAME */}
                <div className="mt-6">
                    <label className="block mb-3 font-medium">
                        Eye Frame Shape
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                        {eyeFrameShapes.map((shape) => (
                            <button
                                key={shape}
                                onClick={() =>
                                    setConfig((prev) => ({
                                        ...prev,
                                        eyeFrameShape: shape,
                                    }))
                                }
                                className={`
                  border rounded-lg px-4 py-2 capitalize transition
                  ${config.eyeFrameShape === shape
                                        ? "bg-black text-white"
                                        : "bg-white"
                                    }
                `}
                            >
                                {shape}
                            </button>
                        ))}
                    </div>
                </div>

                {/* EYE BALL */}
                <div className="mt-6">
                    <label className="block mb-3 font-medium">
                        Eye Ball Shape
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                        {eyeBallShapes.map((shape) => (
                            <button
                                key={shape}
                                onClick={() =>
                                    setConfig((prev) => ({
                                        ...prev,
                                        eyeBallShape: shape,
                                    }))
                                }
                                className={`
                  border rounded-lg px-4 py-2 capitalize transition
                  ${config.eyeBallShape === shape
                                        ? "bg-black text-white"
                                        : "bg-white"
                                    }
                `}
                            >
                                {shape}
                            </button>
                        ))}
                    </div>
                </div>

            </Accordion>
        </div>
    );
}

export default ControlsPanel;