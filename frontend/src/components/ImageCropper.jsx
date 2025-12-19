import Cropper from "react-easy-crop";
import { useState } from "react";

export default function ImageCropper({ image, onCropDone }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <div style={{ height: 300, position: "relative" }}>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={450 / 350}   // IMPORTANT: PDF RATIO
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={(_, croppedAreaPixels) =>
          onCropDone(croppedAreaPixels)
        }
      />
    </div>
  );
}
