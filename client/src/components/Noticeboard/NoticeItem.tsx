// import "../styles/StudentNoticesStyles.scss";

function NoticeItem({ data }: { [key: string]: any; }) {
    return (
        <div className="notice-item">
            <div className="notice-item-content">

                <div className="notice-title">
                    {data.noticeTitle}
                </div>


                <div className="description">
                    {data.description}
                </div>
            </div>
        </div>

    );
}

export default NoticeItem;