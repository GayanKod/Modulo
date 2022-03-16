import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import PDFImg from "../../../assets/img/PDFImg.png";

interface FileInputContainerprops {
  selectedFile: File | undefined;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

function FileInputContainer(props: FileInputContainerprops) {
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilePicked(true);
    if (!event.target.files) return;
    props.setSelectedFile(event.target.files[0]!);
  };

  switch (isFilePicked) {
    case true:
      return (
        <>
          <div className="Fileselector-container">
            <img src={PDFImg} alt="PDF_Image" className="pdf-image" />
            <p>{props.selectedFile?.name}</p>
          </div>
        </>
      );

    default:
      return (
        <>
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
        </>
      );
  }
}
export default FileInputContainer;
