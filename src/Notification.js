const Notification = ({ message }) => {
  const green = {
    color: "green",
    background: "lightgray",
    fontSize: 18,
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    borderStyle: "solid",
  };

  if (message === null) {
    return null;
  }

  return <div style={green}>{message}</div>;
};

export default Notification;
