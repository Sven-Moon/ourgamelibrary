interface AlertProps {
  type: string;
  message: string;
}

const Alert = ({ type, message }: AlertProps):React.JSX.Element => {
	return <div className={`alert alert-${type}`}>{message}</div>;
};
export { Alert };
