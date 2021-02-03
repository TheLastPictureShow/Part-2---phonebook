import React from "react";
import Notification from "./Notification";
// phoneService is a module with backend functionality (axios):
import phoneService from "./services/entries";

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
    // Now let's check if the entry already exists in the "persons" state array:
    const exists = persons.map((el) => el.name);
    // We get an array of existing names. Let's adjust the function:
    if (exists.includes(newName)) {
      // The entry exists. Let's warn the user about that:
      alert(`${newName} is already added to the phonebook.`);
    } else {
      // The entry doesn't exist. Let's create an object with the new entry:
      const entryObject = {
        name: newName,
        number: newNumber,
      };
      // Let's post the new entry to the server:
      phoneService.create(entryObject).then((returnedEntry) => {
        // Let's reset the pieces of state for the input fields to their default values:
        setNewName("");
        setNewNumber("");
        // Let's set a message for the notification:
        setMessage(`Added ${newName}`);
        // Let's set a timeout for the notification:
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        // Let's add the object to the "persons" state array:
        setPersons(persons.concat(returnedEntry));
      });
    }
  };
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
