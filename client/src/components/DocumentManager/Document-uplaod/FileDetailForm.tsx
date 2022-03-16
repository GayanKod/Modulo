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
      props.setDocs([
        ...props.docs,
        {
          name: props.selectedFile?.name
            .split(".")
            .slice(0, -1)
            .join(".") as string,
          size: (Math.round(props.selectedFile?.size / 1024) +
            "KB") as unknown as string,
          type: props.selectedFile?.name.split(".").pop() as string,
          date: new Date().toLocaleDateString(),
          description: description as string,
        },
      ]);
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
      <form onSubmit={uploadHandler}>
        <label className="fileNameText" htmlFor="filename">
          File Name:
        </label>
        <input
          className="fileNameInput"
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
        <div className="buttons">
          <button className="uploadButton">Upload</button>
          <button className="cancelButton" onClick={cancelSelection}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default FileDetailForm;
