import { Route, Redirect } from "react-router-dom";
import { AUTH_TOKEN } from "../constants/storageKeys";
import JWT from "jwt-decode";

let hasAccess = false;
function PrivateRoute({ component, ...rest }) {
  const isLoggedIn = !!localStorage.getItem(AUTH_TOKEN);
  if (isLoggedIn) {
    const token = localStorage.getItem(AUTH_TOKEN);
    const decodedExp = JWT(token);
    const currentTimestamp = Date.now() / 1000;
    hasAccess = decodedExp.exp > currentTimestamp;
  } else {
    hasAccess = false;
  }
  const MyComponent = component;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        hasAccess ? (
          <MyComponent />
        ) : (
          <Redirect
            to={{
              pathname: "/screens/LoginPage",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
