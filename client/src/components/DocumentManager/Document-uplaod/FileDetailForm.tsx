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
  const [filename, setFilename] = useState<string>(props.selectedFile?.name!);

  const fileNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilename(event.target.value);
  };

  const uploadHandler = (event: React.SyntheticEvent) => {
    var formdata = new FormData();
    formdata.append("myfile", props.selectedFile!);
    formdata.append("documentname", filename!);
    formdata.append("description", description!);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    event.preventDefault();
    if (props.selectedFile != null) {
      axios
        .post("https://localhost:5000/api/File/upload", formdata, config)
        .then((response) => console.log(response))
        .catch((error) => console.log(error.response.data.errors));

      setIsFileUploaded(true);
      props.setIsFilePicked(false);
      alert("File has been successfully uploaded!");
      window.location.reload();
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
        <label className="fileDetailForm-fileNameRule" htmlFor="rule">
          *Append your index at the end*
        </label>
        <input
          className="fileDetailForm-fileNameInput"
          id="filename"
          type="text"
          defaultValue={props.selectedFile?.name}
          onChange={fileNameHandler}
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
