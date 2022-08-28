import timelineData from './data';
import TimelineItem from './TimelineItem';

function TimelineContainer(){
    return<>{
        timelineData.length > 0 && (
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        )
    }</>
}
   

export default TimelineContainer;