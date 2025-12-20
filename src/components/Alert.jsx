function Alert({ message, type }) {
  let bgColor = type === "error" ? "bg-red-200" : "bg-green-200";
  return (
    <div className={`${bgColor} p-2 my-2 rounded`}>
      {message}
    </div>
  );
}

export default Alert;
