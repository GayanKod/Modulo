import { Dispatch, SetStateAction, useState } from "react";
import { Documents } from "./Documents";

interface FileDetailFormProps {
  selectedFile: File | undefined;
  docs: Documents[];
  setDocs: Dispatch<SetStateAction<Documents[]>>;
}

function FileDetailForm(props: FileDetailFormProps) {
  const [description, setDescription] = useState<string | null>();

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
          value={props.selectedFile?.name}
        />

        <label htmlFor="descriptionbox">Description:</label>
        <input type="text" id="descriptionbox" onChange={descriptionHandler} />
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
