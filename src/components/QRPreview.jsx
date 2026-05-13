import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

function QRPreview({ config }) {
    const qrRef = useRef(null);
    const qrCode = useRef(null);

    useEffect(() => {
        qrCode.current = new QRCodeStyling({
            width: 300,
            height: 300,
            type: "svg",

            data: config.data,

            dotsOptions: {
                color: config.fgColor,
                type: config.bodyShape,
            },

            cornersSquareOptions: {
                type: config.eyeFrameShape,
            },

            cornersDotOptions: {
                type: config.eyeBallShape,
            },
        });

        qrCode.current.append(qrRef.current);
    }, []);

    useEffect(() => {
        qrCode.current?.update({
            data: config.data,

            image: config.logo,

            dotsOptions: {
                color: config.fgColor,
                type: config.bodyShape,
            },

            cornersSquareOptions: {
                type: config.eyeFrameShape,
            },

            cornersDotOptions: {
                type: config.eyeBallShape,
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 5,
                imageSize: 0.4,
            },
        });
    }, [config]);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div ref={qrRef}></div>
        </div>
    );
}

export default QRPreview;