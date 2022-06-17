import React, { Dispatch, SetStateAction, useState } from "react";

import { Documents } from "./Documents";
import FileDetailForm from "./FileDetailForm";
import FileInputContainer from "./FileInputContainer";

interface FileSelectorProps {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
}

function FileSelector(props: FileSelectorProps): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isFilePicked, setIsFilePicked] = useState(false);
  return (
    <div className="FileSelector">
      <FileInputContainer
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        isFilePicked={isFilePicked}
        setIsFilePicked={setIsFilePicked}
      />

      <FileDetailForm
        selectedFile={selectedFile}
        docs={props.docs}
        setDocs={props.setDocs}
        setIsFilePicked={setIsFilePicked}
      />
    </div>
  );
}

export default FileSelector;
