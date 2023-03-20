import React from "react";
import ticketsImage from "./../image/ticket.jpg"

const Header = () => {
  return(
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} atl="An image of tickets" />
    </React.Fragment>
  );
}

export default Header;