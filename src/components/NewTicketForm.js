import React from "react";

const NewTicketForm = () => {

  const handleNewTicketFormSubmission = (event) => {
    event.preventDefault();
    
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='type'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issues.' />
      </form>
    </React.Fragment>
  );
}

export default NewTicketForm;