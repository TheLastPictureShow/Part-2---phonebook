const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="green">{message}</div>;
};

export default Notification;
