import { type } from "os";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { setSyntheticLeadingComments } from "typescript";
import { domainToASCII } from "url";
import { Documents } from "./Documents";
import FileDetailForm from "./FileDetailForm";
import FileInputContainer from "./FileInputContainer";

interface FileSelectorProps {
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
}

function FileSelector(props: FileSelectorProps): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File>();

  return (
    <div className="FileSelector">
      <FileInputContainer
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />

      <FileDetailForm
        selectedFile={selectedFile}
        docs={props.docs}
        setDocs={props.setDocs}
      />
    </div>
  );
}

export default FileSelector;
