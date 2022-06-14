import "../../styles/NoticeInput.scss";
import "../../styles/NoticeCard.scss";
import "../../styles/NoticeboxStyles.scss";
import NoticeData from './NoticeData';
import NoticeItem from "./NoticeItem";


function NoticeContainer(){
    return<>{
        NoticeData.length > 0 && (
            <div className="notice-container">
                {NoticeData.map((data, idx) => (
                    <NoticeItem data={data} key={idx} />
                ))}
            </div>
        )
    }</>
}
   
export default NoticeContainer;

