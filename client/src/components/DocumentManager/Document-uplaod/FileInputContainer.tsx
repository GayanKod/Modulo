import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import PDFImg from "../../../assets/img/PDFImg.png";

interface FileInputContainerprops {
  selectedFile: File | undefined;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  isFilePicked: boolean;
  setIsFilePicked: React.Dispatch<React.SetStateAction<boolean>>;
}

function FileInputContainer(props: FileInputContainerprops) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setIsFilePicked(true);
    if (!event.target.files) return;
    props.setSelectedFile(event.target.files[0]!);
  };

  switch (props.isFilePicked) {
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
              className="Fileselector-container-choose-file-input"
              type="file"
              id="myfile"
              name="myfile"
              accept="application/pdf,
              application/vnd.ms-excel,.doc,.docx,
              application/msword,
              application/vnd.openxmlformats-officedocument.wordprocessingml.document,
              .pps,
              application/vnd.ms-powerpoint,
              application/vnd.openxmlformats-officedocument.presentationml.slideshow,
              application/vnd.openxmlformats-officedocument.presentationml.presentation"
              onChange={handleChange}
            />
            <label
              className="Fileselector-container-choose-file-label"
              htmlFor="file"
            >
              Select a file
            </label>
            <p className="Fileselector-container-drag-file-text">
              or drag file in here
            </p>
          </div>
        </>
      );
  }
}
export default FileInputContainer;
