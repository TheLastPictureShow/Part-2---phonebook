import Entry from "./Entry";
import phoneService from "./services/entries";

const Persons = ({ persons, setPersons }) => {
  // Let's make a function that will remove an entry from the state:
  const removeEntry = (id, name) => {
    window.confirm(`Delete ${name}?`);
    const url = `http://localhost:3001/persons/${id}`;
    phoneService.remove(url);
    setPersons(persons.filter((entry) => entry.id !== id));
    console.log(persons);
  };

  return persons.map((el, index) => (
    <Entry
      name={el.name}
      number={el.number}
      key={index}
      removeEntry={() => removeEntry(el.id, el.name)}
    />
  ));
};

export default Persons;
