import React from "react";
import LoginForm from "../Auth/LoginForm";

const Login = () => {
  return (
    <>
      <div>
        <section className="topSection2" style={{ backgroundColor: "#F8F8F8" }}>
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-xl-6 col-xxl-5 text-center">
                <div className="mb-4">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
