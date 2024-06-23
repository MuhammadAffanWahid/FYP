import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import upload_cloud from "./images/upload_cloud.png";

const CarColorDetector = () => {
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [carColor, setCarColor] = useState(null);
  const [showDesign, setShowDesign] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setDragActive(false)
    setImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false),
    accept: "image/*",
    multiple: false,
  });

  const handleEscapePress = useCallback((event) => {
    if (event.key === "Escape") {
      setImage(null);
      setCarColor(null);
      setShowDesign(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscapePress);
    return () => {
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [handleEscapePress]);

  const handleDetectColor = useCallback(() => {
    // Here you can add your logic to detect the color of the car in the image
    // For now, I'm hardcoding the color to "Red"
    setCarColor("Red");
    setShowDesign(true);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-[#00091D] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px]">
        <div className="flex w-9/12 md:w-7/12 lg:w-1/2 max-w-4xl shadow-xl rounded-3xl overflow-hidden bg-white ">
          <div className="flex-1 p-8 border-r border-gray-200 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-6 text-[#4C4CBD]">
              Image Upload
            </h2>
            {showDesign? (
              <div
                className="w-full h-72 border-2 border-dashed border-[#4C4CBD] rounded-2xl flex flex-col items-center justify-center bg-gray-50 cursor-pointer"
              >
                <div
                  className="w-7/12 mt-2 h-44 bg-red-500 rounded-2xl"
                  style={{
                    backgroundImage: "linear-gradient(to right, #FF69B4, #FFC0CB)",
                  }}
                />
                <p className="text-2xl font-bold text-[#4C4CBD] mt-2">
                  {carColor} Car
                </p>
                <button
                  className="mt-4 bg-[#4C4CBD] px-6 py-1 text-white rounded-full hover:bg-[#383894]"
                  onClick={() => setShowDesign(false)}
                >
                  Back
                </button>
              </div>
            ) : (
              <div
                {...getRootProps()}
                className={`w-full h-72 border-2 border-dashed border-[#4C4CBD] rounded-2xl flex flex-col items-center justify-center bg-gray-50 cursor-pointer ${
                  dragActive? "bg-blue-100" : "bg-[#f2f2ff]"
                }`}
              >
                <input {...getInputProps()} />
                {image? (
                  <img
                    src={URL.createObjectURL(image)}
                    className="h-[100px] w-[135px] mt-4 rounded-xl"
                  />
                ) : (
                  <img
                    src={upload_cloud}
                    className="h-[100px] w-[135px] mt-4"
                  />
                )}
                <p className="text-[#4C4CBD] font-semibold my-4">
                  Drag and Drop Image
                </p>
                <p className="text-gray-400 mt-3 text-sm mb-1">——— Or ———</p>
                {image? (
                  <button
                    className="mt-2 mb-4 bg-[#4C4CBD] px-6 py-1 text-white rounded-full hover:bg-[#383894]"
                    onClick={handleDetectColor}
                  >
                    Detect Color
                  </button>
                ) : (
                  <button className="mt-2 mb-4 bg-[#4C4CBD] px-6 py-1 text-white rounded-full hover:bg-[#383894]">
                    Upload
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarColorDetector;