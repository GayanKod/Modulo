import { type } from "os";
import React, { Dispatch, SetStateAction, useState } from "react";
import { setSyntheticLeadingComments } from "typescript";
import { domainToASCII } from "url";
import { Documents } from "./Documents";

interface FileSelectorProps {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
}

function FileSelector(props: FileSelectorProps): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [description, setDescription] = useState<string | null>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilePicked(true);
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]!);
  };

  const descriptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const uploadHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (selectedFile != null) {
      props.setDocs([
        ...props.docs,
        {
          name: selectedFile?.name as string,
          size: selectedFile?.size as unknown as string,
          type: selectedFile?.type as string,
          date: selectedFile?.lastModified as unknown as string,
          description: description as string,
        },
      ]);
    }
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

      <div className="fileDetailForm">
        <form onSubmit={uploadHandler}>
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
          <input
            type="text"
            id="descriptionbox"
            onChange={descriptionHandler}
          />

          <button className="uploadButton">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default FileSelector;
