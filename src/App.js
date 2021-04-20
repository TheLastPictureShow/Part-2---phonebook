import React, { useState, useEffect } from "react";
import Persons from "./Persons";
import Form from "./Form";
// entryService is a module with backend functionality (axios):
import entryService from "./services/entries";

const App = () => {
  // Let's create our pieces of state:
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    /* Let's get the initial phonebook entries from the database to set
       the "persons" state: */
    entryService.getAll().then((initialEntries) => {
      console.log("Initial Entries are:", initialEntries);
      setPersons(initialEntries);
    });
  }, []);

  const handleNameChange = (event) => {
    // Let's set the user input from the name input field into the "newName" piece of state:
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    // Let's do the same, but for the number input field:
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Form
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        message={message}
        setMessage={setMessage}
      />
      <h2>Entries:</h2>
      <Persons persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
