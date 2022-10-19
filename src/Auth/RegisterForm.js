import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RegisterForm.css";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import logo from "../assests/img/logo.png";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const RegisterForm = () => {
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const InputType = visible ? "text" : "password";
  const history = useNavigate();
  const [userData, setValue] = useState({
    firstNmae: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    password: "",
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
        {/* <h1>pricing</h1> */}
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center mt-4">
            <div className="px-xl-1 mx-auto col-sm-8 col-md-6 col-lg-6">
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
                        Sign up
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
                      Welcome to NextynTrends!
                    </h4> */}
                    <p className="mb-3 mt-3" style={{ color: "#6e6b7b" }}>
                      Please register your account and start the adventure
                    </p>

                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-outline mb-3">
                            <TextField
                              id="outlined-basic"
                              className="form-control form-control-lg"
                              autocomplete="off"
                              label="name"
                              variant="outlined"
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-12">
                          <div className="form-outline mb-3">
                            <TextField
                              id="outlined-basic"
                              className="form-control form-control-lg"
                              autocomplete="off"
                              label="email"
                              variant="outlined"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-outline mb-3">
                            <TextField
                              id="outlined-basic"
                              className="form-control form-control-lg"
                              autocomplete="off"
                              label="contact"
                              variant="outlined"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
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
                          </div>
                        </div>
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
                          Signup
                        </Button>
                      </div>
                    </form>
                  </div>

                  <p className="text-center mt-3">
                    <span className="pe-2 card-text">
                      Already have an account?
                    </span>
                    <Link to="/login">
                      <span className="for-pass">Login</span>
                    </Link>
                  </p>

                  {/* <div className="orSeparator">
                    <span>Or</span>
                  </div> */}
                  {/* <div className="mt-2">
                    <LoginWithGoogle txt="Signup with Google" />
                  </div> */}

                  {/* <div className="form-check mt-4">
                    <Link to="/">
                      <span className="for-pass">Forgot Password?</span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
