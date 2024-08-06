import React from "react";
import "./Event.css";

type TEventProps = {
    id?: number 
    thumbnail?: string 
    heading?: string 
}

const Event = (props: TEventProps) => {
    const { id, thumbnail, heading } = props 

    return (
        <div className="col-md-4 col-sm-6 event-item">
            <a className="event-link material" data-toggle="modal" href={`#eventModal${id}`}>
                <div className="event-hover">
                    <div className="event-hover-content">
                        <i className="fas fa-search-plus fa-3x search-icon" aria-hidden="true"></i>
                    </div>
                </div>
                <img className="img-fluid" src={thumbnail} alt={`${heading} Pic`} />
            </a>
            <div className="event-caption">
                <p className="text-muted">{heading}</p>
            </div>
        </div>
    )
}

export default Event