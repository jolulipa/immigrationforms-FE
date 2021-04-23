import "./styles.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row">
        <form className="loginForm">
          <div className="col-10">
            <h3>Sign In</h3>
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-secondary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="http://localhost:3000/#/">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
