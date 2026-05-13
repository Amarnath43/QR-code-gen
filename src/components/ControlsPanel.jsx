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
        <div className="w-[380px]">

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

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="w-full"
                />

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
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                        >
                            Remove Logo
                        </button>
                    )
                }

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