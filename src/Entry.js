const Entry = ({ name, number, removeEntry }) => {
  return (
    <div>
      {name}, {number}
      {""}
      <button onClick={removeEntry}>Delete</button>
    </div>
  );
};

export default Entry;
