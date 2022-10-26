import React from "react";
import ForgotPasswordForm from "../Auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <>
      <div>
        <section className="topSection2" style={{ backgroundColor: "#F8F8F8" }}>
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-xl-6 col-xxl-5 text-center">
                <div className="mb-4">
                  <ForgotPasswordForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgotPassword;
