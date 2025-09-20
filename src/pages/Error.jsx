import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="error-container container">
        <div>
          <h3>
            Oops... Looks like you took a wrong turn. Even Google Maps can't
            find this page!
          </h3>
          <Link to={"/"} className="btn">
            Go Back Home
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
