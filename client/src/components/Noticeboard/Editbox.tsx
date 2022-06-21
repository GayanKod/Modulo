import { Props } from "react";
import "../../styles/NoticeCard.scss";
import "../Noticeboard/NoticeCard.tsx";
import {INotice} from "./interface";

interface Props {

    notice: INotice;

  }

const Editbox = ({date, notice.noticeTitle, notice.description}: Props) => {

    return (
        <div className="notice">
            <div className="content">

                <div className="title">
                    {noticeTitle}
                </div>

                <span className="date">
                    {date}
                </span>
                <hr></hr>
                <br></br>

                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default Editbox;