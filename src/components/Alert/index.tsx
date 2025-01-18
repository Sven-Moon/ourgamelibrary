const Alert: React.FC<AlertProps> = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
};
export { Alert };