import React from "react"
import "./Modal.css"

type TModalProps = {
    id?: number 
    full?: string 
    heading?: string
    date?: string 
    location?: string 
    address?: string 
    details?: string
}

const Modal = (props: TModalProps) => {
    const { id, full, heading, date, location, address, details } = props
    const tindex: number = -1

    return (
        <div className="event-modal modal fade" id={`eventModal${id}`} tabIndex={tindex} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Click icon and dismiss modal */}
            <div className="close-modal" data-dismiss="modal">
              <i className="fas fa-times-circle rounded-circle material fa-3x"></i>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    <h2 className="text-uppercase">{heading}</h2>
                    <img className="img-fluid d-block mx-auto" src={full} alt={`${heading} Pic`} />
                    <ul className="list-inline">
                      <li><span className="font-weight-bold">Date:</span> {date}</li>
                      <li>
                        <span className="font-weight-bold">Location:</span>
                        <a className="event-address" href={address} target="_blank" rel="noopener noreferrer"> {location}</a>
                      </li>
                    </ul>
                    <p>
                      <strong>Details: </strong> {details}
                    </p>
                    {/* Begin MailChimp Signup Form for Events */}
                    <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
                    <div id="mc_embed_signup">
                      <form action="https://herokuapp.us12.list-manage.com/subscribe/post?u=d85f808a9af64d58bbb1fa212&amp;id=0cd7068beb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" rel="noopener noreferrer" noValidate>
                        <div id="mc_embed_signup_scroll">
                        {/* Do not remove this or risk form bot signups */}
                          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden={false}>
                            <input type="text" name="b_d85f808a9af64d58bbb1fa212_0cd7068beb" tabIndex={-1} value="" />  
                          </div>
                          <div className="clear">
                            <input type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" className="btn btn-signUp material" />
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* End MailChimp Signup Form for Events */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Modal