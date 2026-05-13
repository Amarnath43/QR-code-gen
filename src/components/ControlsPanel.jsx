function ControlsPanel({ config, setConfig }) {
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
        <div className="bg-white p-6 rounded-2xl shadow-lg w-[350px]">
            <label className="block mb-2 font-medium">
                Website URL
            </label>

            <input
                type="text"
                placeholder="https://example.com"
                value={config.data}
                onChange={(e) =>
                    setConfig((prev) => ({
                        ...prev,
                        data: e.target.value,
                    }))
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none"
            />
            <div className="mt-6">
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
                <div className="mt-6">
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
          ${
            config.eyeBallShape === shape
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

<div className="mt-6">
  <label className="block mb-3 font-medium">
    Upload Logo
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handleLogoUpload}
    className="w-full"
  />
</div>
                </div>
            </div>
        </div>
    );
}

export default ControlsPanel;