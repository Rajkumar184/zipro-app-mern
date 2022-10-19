import React from "react";
import RegisterForm from "../Auth/RegisterForm";

const Login = () => {
  return (
    <>
      <section
        className="topSection"
        style={{ backgroundColor: "#F8F8F8", height: "100vh" }}
      >
        <div className="container-lg">
          <div className="row">
            <div className="col-12 text-center">
              <div className="mb-4">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
