import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const CarColorDetector = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const filesWithProgress = acceptedFiles.map((file) => ({
        file,
        progress: 100, // Mock progress for demo purposes
      }));
      setFiles([...files, ...filesWithProgress]);
    },
    [files]
  );

  const handleRemove = (fileName) => {
    setFiles(files.filter((file) => file.file.name !== fileName));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex justify-center items-center h-screen bg-blue-900">
      <div className="flex w-3/4 max-w-4xl shadow-xl rounded-lg overflow-hidden bg-white">
        <div className="flex-1 p-8 border-r border-gray-200 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">File Upload</h2>
          <div
            {...getRootProps()}
            className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50 cursor-pointer"
          >
            <input {...getInputProps()} />
            <svg
              className="w-12 h-12 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 014-4h.586l1.707-1.707a1 1 0 011.414 0L12 11.586V5a1 1 0 011-1h1m4 0h2a2 2 0 012 2v4a1 1 0 01-1 1h-4m-4 4v6m-4-6v6m-4 0v6m-4-6v6m-2-6h2a2 2 0 002-2v-6m0-4h2a2 2 0 012 2v6m0 4h6m-4-4h6"
              ></path>
            </svg>
            <p className="text-gray-500">Drag and Drop Files</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Browse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarColorDetector;
