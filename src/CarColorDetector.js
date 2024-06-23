import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import upload_cloud from "./images/upload_cloud.png";

const CarColorDetector = () => {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false),
  });

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-[#00091D] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px]">
        <div className="flex w-9/12 md:w-7/12 lg:w-1/2 max-w-4xl shadow-xl rounded-3xl overflow-hidden bg-white ">
          <div className="flex-1 p-8 border-r border-gray-200 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-6 text-[#4C4CBD]">
              File Upload
            </h2>
            <div
              {...getRootProps()}
              className={`w-full h-71 border-2 border-dashed border-[#4C4CBD] rounded-2xl flex flex-col items-center justify-center bg-gray-50 cursor-pointer ${
                dragActive? "bg-blue-100" : ""
              }`}
            >
              <input {...getInputProps()} />
              <img
                src={upload_cloud}
                className="h-[100px] w-[135px] mt-4"
              ></img>
              <p className="text-[#4C4CBD] font-semibold my-4">
                Drag and Drop Files
              </p>
              <p className="text-gray-500 mt-3">------ or ------</p>
              <button className="mt-2 mb-4 bg-[#4C4CBD] px-6 py-1 text-white rounded-full hover:bg-[#383894]">
                Browse
              </button>
              {/* {dragActive && (
                <p className="text-lg text-blue-500">Drop the files here...</p>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <div>
        {files.map((file) => (
          <div
            key={file.name}
            className="flex justify-between items-center mb-4 p-2 bg-gray-50 rounded-lg shadow-sm"
          >
            <span className="text-lg">{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarColorDetector;