import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { Documents } from "./Documents";

interface FileDetailFormProps {
  selectedFile: File | undefined;
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
  setIsFilePicked: React.Dispatch<React.SetStateAction<boolean>>;
}

function FileDetailForm(props: FileDetailFormProps) {
  const [description, setDescription] = useState<string>();
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const uploadHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (props.selectedFile != null) {
      axios
        .post("https://localhost:5000/api/File/upload", {
          MyFile: props.selectedFile,
          DocumentName: props.selectedFile?.name,
          DocumentType: props.selectedFile?.name.split(".").pop(),
          Description: description,
          DocumentSize: props.selectedFile?.size,
          UserId: 65,
        })
        .catch((error) => console.log(error));

      setIsFileUploaded(true);
      props.setIsFilePicked(false);
      alert("File has been successfully uploaded!");
    } else {
      alert("Please select a file to upload");
    }
  };

  const descriptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const cancelSelection = () => {
    window.location.reload();
  };
  return (
    <div className="fileDetailForm">
      <form>
        <label className="fileDetailForm-fileNameText" htmlFor="filename">
          File Name:
        </label>
        <input
          className="fileDetailForm-fileNameInput"
          id="filename"
          type="text"
          value={isFileUploaded ? "" : props.selectedFile?.name}
        />

        <label htmlFor="descriptionbox">Description:</label>
        <input
          type="text"
          id="descriptionbox"
          onChange={descriptionHandler}
          value={isFileUploaded ? "" : description}
        />
        <div className="fileDetailForm-buttons">
          <button
            className="fileDetailForm-buttons-uploadButton"
            onClick={uploadHandler}
          >
            Upload
          </button>
          <button
            className="fileDetailForm-buttons-cancelButton"
            onClick={cancelSelection}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default FileDetailForm;
