import { stringify } from "querystring";
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import PDFImg from "../../../assets/img/PDFImg.png";
import WordImg from "../../../assets/img/WordImg.png";
import PowerPointImg from "../../../assets/img/PowerpointImg.png";
import ExcelImg from "../../../assets/img/ExcelImg.png";

interface FileInputContainerprops {
  selectedFile: File | undefined;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  isFilePicked: boolean;
  setIsFilePicked: React.Dispatch<React.SetStateAction<boolean>>;
}

function FileInputContainer(props: FileInputContainerprops) {
  const [img, setImg] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    props.setSelectedFile(event.target.files[0]!);

    var ext = event.target.files[0].type;
    console.log(ext);
    if (ext == "application/pdf") {
      setImg(PDFImg);
    } else if (
      ext ==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      setImg(WordImg);
    } else if (
      ext ==
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ) {
      setImg(PowerPointImg);
    } else if (
      ext == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setImg(ExcelImg);
    }
    props.setIsFilePicked(true);
  };

  switch (props.isFilePicked) {
    case true:
      return (
        <>
          <div className="Fileselector-container">
            <img
              src={img}
              alt="Document-type-image"
              className="Fileselector-container-image"
            />
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
              application/vnd.openxmlformats-officedocument.presentationml.presentation,
              application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
              application/vnd.ms-excel"
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
