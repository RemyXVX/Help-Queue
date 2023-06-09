import React from "react";
import Header from "./Header";
import NewTicketForm from "./NewTicketForm";
import TicketControl from "./TicketControl";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;
