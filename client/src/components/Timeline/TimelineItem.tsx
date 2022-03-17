import "../../styles/Timeline.scss";
const TimelineItem = ({data}:{[key:string]:any}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <div className="event">
                        <h2 className="event-name" >
                            {data.eventName}
                        </h2>
                        <div className="date">
                            <time className="event-starting-date">{data.startingDate}</time>
                             {data.endingDate && 
                             <time className="event-starting-date"> - {data.startingDate}</time>}
                        </div>
                    </div>
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;