import { type } from "os";
import React, { useState } from "react";

function FileSelector() {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilePicked(true);
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]!);
  };

  return (
    <div className="FileSelector">
      <div className="Fileselector-container">
        <input
          className="choose-file-input"
          type="file"
          id="myfile"
          name="myfile"
          onChange={handleChange}
        />
        <label className="choose-file-label" htmlFor="file">
          Select a file
        </label>
        <p className="drag-file-text">or drag file in here</p>
      </div>

      <label>File Name: {selectedFile?.name}</label>
    </div>
  );
}

export default FileSelector;
