import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

// const mainTicketList = [
//   {
//     location: "3A",
//     names: "Thato and Haley",
//     issue: "Firebase will not save record!" 
//   },
//   {
//     location: "4B",
//     names: "Sleater and Kinney",
//     issue: "Prop types are throwing an error." 
//   },
//   {
//     location:  "9F",
//     names:  "Imani and Jacob",
//     issue:  "Child component isn't rendering."
//   }
// ]

const TicketList = (props) => {
  return(
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket, index) =>
        <Ticket 
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      )}
    </React.Fragment>
  );
}

TicketList.PropTypes = {
  ticketList: PropTypes.array
};

export default TicketList;