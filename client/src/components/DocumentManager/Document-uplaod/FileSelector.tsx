import { type } from "os";
import React, { useState } from "react";

type FileSelectorProps = {
  docs: {
    name: string;
    size: string;
    type: string;
    date: string;
    description: string;
  }[];
  // setDocs: () => void;
};

function FileSelector(props: FileSelectorProps) {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilePicked(true);
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]!);
  };
  // const uploadHandler = () => {};
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

      <div className="fileDetailForm">
        <form>
          <label className="fileNameText" htmlFor="filename">
            File Name:
          </label>
          <input
            className="fileNameInput"
            id="filename"
            type="text"
            value={selectedFile?.name}
          />

          <label htmlFor="descriptionbox">Description:</label>
          <input type="text" id="descriptionbox" />

          <button>Upload</button>
        </form>
      </div>
    </div>
  );
}

export default FileSelector;
