import { Route, Redirect } from "react-router-dom";
import { AUTH_TOKEN } from "../constants/storageKeys";

function PrivateRoute({ component, ...rest }) {
  // You can do here any auth logic that you want to use
  // Here, I have oversimplified this
  const isLoggedIn = !!localStorage.getItem(AUTH_TOKEN);
  console.log(`status`, isLoggedIn);
  const MyComponent = component;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <MyComponent />
        ) : (
          <Redirect
            to={{
              pathname: "/unauthorized",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
