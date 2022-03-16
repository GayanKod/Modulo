import "../../styles/Timeline.scss";
const TimelineItem = ({data}:{[key:string]:any}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">

            {/* <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span> */}
            
            <div className="event">
                        <h2 className="event-name" >
                            {data.eventName}
                        </h2>
                        <div className="Date">
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