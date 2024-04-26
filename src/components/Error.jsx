import emptyPlate from "../assets/no-food-found.png";
import { Link } from "react-router-dom";
const Error = ({ message, explanation }) => {
  return (
    <div className="not-found-container">
      <img className="not-found-image" src={emptyPlate} alt="" />
      <h1 className="not-founded-header">{message ? message : "Oh no!"}</h1>
      <p>{explanation ? explanation : "Something went wrong"}</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Error;
