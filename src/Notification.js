const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  if (message === "Name missing! Please input a name") {
    return <div className="red">{message}</div>;
  }

  if (message === "Number missing! Please input a number") {
    return <div className="red">{message}</div>;
  }

  if (message === "Name already in phonebook") {
    return <div className="red">{message}</div>;
  }

  return <div className="green">{message}</div>;
};

export default Notification;
