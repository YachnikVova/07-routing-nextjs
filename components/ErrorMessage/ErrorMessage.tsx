import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return <p className={css.error}>There was an error, please try again...</p>;
};

export default ErrorMessage;
