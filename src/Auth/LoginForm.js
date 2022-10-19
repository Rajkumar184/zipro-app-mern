import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "reactstrap";
import "./LoginForm.css";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import logo from "../assests/img/logo.png";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginForm = () => {
  const history = useNavigate();
  const [profile, setProfile] = useState([]);
  const [visible, setVisible] = useState(false);
  const InputType = visible ? "text" : "password";
  const [isAuth, setIsAuth] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [userData, setValue] = useState({
    password: "",
    email: "",
    subscriptionExpieryDate: "",
    verification_token: "",
  });

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <section className="login-page py-5 ">
        <div className="card cards-border">
          <div className="card-body p-4 text-center">
            <Link
              className="navbar-brand mb-3 d-flex justify-content-center align-items-center"
              to={"/"}
            >
              <div>
                <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </div>

              {/* <img
                      alt="nextyn_logo"
                      style={{ maxWidth: "80px" }}
                      className="header_logo"
                      src={logo}
                    /> */}
            </Link>
            <div className="text-center">
              {/* <h4 className="mb-3" style={{ color: "#5e5873" }}>
                Welcome to Nextyn!
              </h4> */}
              <p className="mb-4 mt-4" style={{ color: "#6e6b7b" }}>
                Please sign-in to your account
              </p>
            </div>
            <form>
              <div className="form-outline mb-4">
                <TextField
                  id="outlined-basic"
                  className="form-control form-control-lg"
                  autocomplete="off"
                  label="email"
                  variant="outlined"
                />
              </div>
              <div className="form-outline mb-4">
                <FormControl
                  className="form-control form-control-lg mb-3"
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    required
                    fullWidth
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Link to="/forgot-password" style={{ textDecoration: "none" }}>
                  <small style={{ color: "#5746ec" }}>Forgot Password?</small>
                </Link>
              </div>
              <div>
                <Button
                  style={{
                    height: "40px",
                    width: "100%",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </div>
            </form>

            <p className="text-center mt-3">
              <span className="pe-2 card-text">New on our platform?</span>
              <Link to="/signup">
                <span className="for-pass">Create an account</span>
              </Link>
            </p>
            {/* <div className="orSeparator">
              <span>Or</span>
            </div> */}
            {/* <div className="mt-2">
              <LoginWithGoogle />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
