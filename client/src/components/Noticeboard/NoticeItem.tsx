// import "../styles/StudentNoticesStyles.scss";
import "../../styles/NoticeCard.scss";

function NoticeItem({ data }: { [key: string]: any; }) {
    return (
        <div className="notice">
            <div className="content">

                <div className="title">
                    {data.noticeTitle}
                </div>

                <span className="date">
                    {data.dateTime}
                </span>
                <hr></hr>
                <br></br>

                <div className="description">
                    {data.description}
                </div>
            </div>
        </div>
    );
}

export default NoticeItem;