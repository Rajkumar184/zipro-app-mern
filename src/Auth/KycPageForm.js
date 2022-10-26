import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "reactstrap";
import "./LoginForm.css";
import TextField from "@mui/material/TextField";

import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

import Button from "@mui/material/Button";
import logo from "../assests/img/logo.png";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import kycverify from "../assests/lotties/kyc-character-illustration.json";
import Lottie from "react-lottie";

const top100Films = [
  { label: "GOVT. ISSUED ICARD" },
  { label: "PAN CARD" },
  { label: "VOTER" },
  { label: "AADHAR CARD" },
  { label: "DRIVING LICENSE" },
  { label: "PASSPORT" },
  { label: "STUDENT ICARD" },
  {
    label: "BANK PASSBOOK",
  },
];

const gender = [
  { label: "MALE" },
  { label: "FEMALE" },
  { label: "TRANSGENDER" },
];
const KycPageForm = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: kycverify,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="clientSection">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <Lottie options={defaultOptions} height={490} width={550} />
          </div>
          <div className="col-12 col-lg-6">
            <div className="p-4 text-center">
              <Link
                className="navbar-brand mb-3 d-flex justify-content-center align-items-center"
                to={"/"}
              >
                <div>
                  <Avatar
                    className="text-center mx-auto"
                    sx={{ bgcolor: "secondary.main" }}
                  >
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    kyc
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
                  Please kyc to your account
                </p>
              </div>
              <form>
                <div className="form-outline mb-4">
                  <TextField
                    accept="image/*"
                    id="icon-button-file"
                    className="form-control form-control-lg"
                    autocomplete="off"
                    variant="outlined"
                    type="file"
                  />
                </div>

                <div className="form-outline mb-3">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    // sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select ID Card Type" />
                    )}
                  />
                </div>

                <div className="form-outline mb-4">
                  <TextField
                    id="outlined-basic"
                    className="form-control form-control-lg"
                    autocomplete="off"
                    label="Enter ID Card Number"
                    variant="outlined"
                  />
                </div>

                <div className="form-outline mb-3">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={gender}
                    // sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Gender" />
                    )}
                  />
                </div>

                <div className="form-outline mb-4">
                  <TextField
                    id="icon-button-file"
                    className="form-control form-control-lg"
                    autocomplete="off"
                    variant="outlined"
                    label="Date of Birth"
                    type="date"
                  />
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
                    Proceed
                  </Button>
                </div>
              </form>

              <div className="form-group">
                <p className="text-center mt-4">
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <ChevronLeftOutlinedIcon
                      className="mr-25"
                      size={14}
                      style={{ color: "#523EE8" }}
                    />
                    <span className="align-middle" style={{ color: "#523EE8" }}>
                      Back
                    </span>
                  </Link>
                </p>
              </div>
              {/* <div className="orSeparator">
              <span>Or</span>
            </div> */}
              {/* <div className="mt-2">
              <LoginWithGoogle />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KycPageForm;
