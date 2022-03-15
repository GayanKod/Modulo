import PDFImg from "../../../assets/img/PDFImg.png";

interface FileInputContainerprops {
  isFilePicked: boolean;
  selectedFile: File | undefined;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FileInputContainer(props: FileInputContainerprops) {
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
              className="choose-file-input"
              type="file"
              id="myfile"
              name="myfile"
              onChange={props.handleChange}
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
