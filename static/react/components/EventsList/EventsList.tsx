import React from "react";
import { JSX } from "react";
import Modal from "./Modal/Modal"
import Event from "./Event/Event"

type Event = {
    id?: number 
    thumbnail?: string 
    heading?: string 
    date?: string 
    location?: string 
    address?: string 
    details?: string 
    full?: string
}

type TEventsListProps = {
    events: Event[]
}

const EventsList = (props: TEventsListProps) => {
    const { events } = props
    return (
        <div>
      <section className="bg-light" id="events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Events</h2>
              <hr className="mt-4 mb-5" />
            </div>
          </div>
          <div className="row">
            {
              events.map((event, i) => {
                return (
                  <Event
                    key={i}
                    id={events[i].id}
                    thumbnail={events[i].thumbnail}
                    heading={events[i].heading}
                  />
                )
              })
            }
          </div>    
        </div>
      </section>
      
      {
        events.map((event, i) => {
          return (
            <Modal
              key={i}
              id={events[i].id}
              heading={events[i].heading}
              full={events[i].full}
              date={events[i].date}
              location={events[i].location}
              address={events[i].address}
              details={events[i].details}
            />
          )
        })
      }

    </div>
    )
}

export default EventsList;