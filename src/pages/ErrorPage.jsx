import Error from "../components/Error";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <Error message={error.statusText} explanation={error.data} />
    </div>
  );
};

export default ErrorPage;
