import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="error-container container">
        <div>
          <Link to={"/"}>
            <img src="../public/assets/error.gif" alt="error image" />
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h3>
          Oops… something went wrong on our end. Our engineers (and a couple of
          confused hamsters 🐹) have been notified. Please try again in a bit!
        </h3>
        <Link to={"/"} className="btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
