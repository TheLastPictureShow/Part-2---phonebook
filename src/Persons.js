import Entry from "./Entry";
import entryService from "./services/entries";

const Persons = ({ persons, setPersons }) => {
  // Let's make a function that will remove an entry from the state:
  const removeEntry = (name, id) => {
    // alert(`You are deleting ${name}`);
    const url = `/api/persons/${id}`;
    entryService.remove(url).then((response) => {
      setPersons(persons.filter((entry) => entry.id !== id));
    });
  };

  return persons.map((el, index) => (
    <Entry
      name={el.name}
      number={el.number}
      key={index}
      removeEntry={() => removeEntry(el.name, el.id)}
    />
  ));
};

export default Persons;
