import "../../styles/NoticeCard.scss";

const NoticeItem = ({data}:{[key:string]:any}) => (
    <div className="notice-item">
        <div className="notice-item-content">
            <div className="notice">
                        <h2 className="notice-title" >
                            {data.noticeTitle}
                        </h2>       
            </div>
            <div className="notice-description">
                        <h2 className="description" >
                            {data.description}
                        </h2>       
            </div>
        </div>
    </div>
);

export default NoticeItem;