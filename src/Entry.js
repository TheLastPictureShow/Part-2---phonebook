const Entry = ({ name, number, removeEntry }) => {
  return (
    <div className="entry">
      <div>Name: {name}</div>
      <div>Number: {number}</div>

      <button className="btn" onClick={removeEntry}>
        Delete
      </button>
    </div>
  );
};

export default Entry;
