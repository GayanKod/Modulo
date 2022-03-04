import timelineEvents from "./data";
function TimelineItem(){
    return(
        <>
        <h1>Timelineitem</h1>
        <div className="timeline-item">
                {timelineEvents.map(event =>(
                    <div className="content-holder">
                         <h2 className="event-name">{event.eventName} </h2>
                         <h3 className="event-starting-date">
                             {event.startingDate}
                         </h3>
                    </div>
                ))}
        </div>
        </>
    );
}
export default TimelineItem;