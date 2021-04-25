import React, { useState, useEffect } from "react";
import Persons from "./Persons";
import Form from "./Form";
// entryService is a module with backend functionality (axios):
import entryService from "./services/entries";
import "./App.css";

const App = () => {
  // Let's create our pieces of state:
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [message, setMessage] = useState(null);
  const [sortButton, setSortButton] = useState(true);

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

  const sortAlpha = () => {
    setSortButton(!sortButton);
  };

  return (
    <div className="app">
      <div className="upper">
        <h2>Phonebook App</h2>
        <div>
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
        </div>
        <button className="btn-alpha" onClick={sortAlpha}>
          Sort Alphabetically
        </button>
      </div>

      <div className="lower">
        <Persons
          persons={persons}
          setPersons={setPersons}
          sortButton={sortButton}
        />
      </div>
    </div>
  );
};

export default App;
