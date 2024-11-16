import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h2>Oops ! an error occured</h2>
      <p>{error && error.data}</p>
      <NavLink to="/">Go to home page</NavLink>
    </div>
  );
};
