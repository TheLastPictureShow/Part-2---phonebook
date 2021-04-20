import React from "react";
import Notification from "./Notification";
// entryService is a module with backend functionality (axios):
import entryService from "./services/entries";

const Form = ({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  persons,
  setPersons,
  handleNameChange,
  handleNumberChange,
  message,
  setMessage,
}) => {
  // Let's add the user entry into the state:
  const addEntry = (event) => {
    // First we prevent the default behavior of the form when submitted:
    event.preventDefault();
    // Now let's create an object with the new entry:
    const entryObject = {
      name: newName,
      number: newNumber,
    };
    // Let's post the new entry to the server:
    entryService.create(entryObject).then((response) => {
      // Let's reset the pieces of state for the input fields to their default values:
      console.log("response is", response);
      setNewName("");
      setNewNumber("");
      // Let's set a message for the notification:
      setMessage(`Added ${newName}`);
      // Let's set a timeout for the notification:
      setTimeout(() => {
        setMessage(null);
      }, 5000);
      // Let's update the "persons" state array with the response from the fulfilled promise:
      setPersons(persons.concat(response));
    });
  };
  console.log("persons is", persons);

  return (
    <form onSubmit={addEntry}>
      <Notification message={message} />
      <h2>Add a new:</h2>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;
