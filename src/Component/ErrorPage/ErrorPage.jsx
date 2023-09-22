import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div>
        <h3>Oops!!!</h3>
        <Link to="/">Go Back Previous</Link>
    </div>
  );
};

export default ErrorPage;