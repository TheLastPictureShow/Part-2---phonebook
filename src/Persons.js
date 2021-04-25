import Entry from "./Entry";
import entryService from "./services/entries";

const Persons = ({ persons, setPersons, sortButton }) => {
  // Let's make a function that will remove an entry from the state:
  const removeEntry = (name, id) => {
    const url = `/api/persons/${id}`;
    entryService.remove(url).then((response) => {
      setPersons(persons.filter((entry) => entry.id !== id));
    });
  };

  const compareValues = (key, order = "asc") => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
      const comparison = a[key].localeCompare(b[key]);

      return order === "desc" ? comparison * -1 : comparison;
    };
  };

  const sortedPersons = [...persons].sort(compareValues("name"));

  if (sortButton === false) {
    return sortedPersons.map((el, index) => (
      <Entry
        name={el.name}
        number={el.number}
        key={index}
        removeEntry={() => removeEntry(el.name, el.id)}
      />
    ));
  }

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
