import { NavLink } from "react-router-dom";

import "./ForgotPassword.css";
import { ChangeEvent, useState } from "react";

function ForgotPassword() {
  const [loading, setLoading] = useState<boolean>(false);
  const [submited, setSubmited] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubmited(false);
    setFormData({
      email: e.target.value,
    });
  };

  function onSubmit(e: any) {
    setSubmited(true);
    e.preventDefault();

    if (!formData?.email) {
      return;
    }

  }

  return (
    <>
      <form
        className="auth-form d-grid align-items-center h-100 p-3 p-sm-4 p-xl-5"
        autoComplete="off"
        onSubmit={onSubmit}
        noValidate
      >
        <div className="w-100">
          <h2 className="gilroy-bold">Forgot Password</h2>
          <p className="gilroy-medium">
            Enter the email address associated with your account.
          </p>
          <div className="relative py-1">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              className="w-100 p-2 mt-1 border form-control"
              placeholder="Enter your email address"
              id="email"
              required
              value={formData?.email}
              onChange={handleInputChange}
            />
            {!formData?.email && submited ? (
              <span className="required-error">Email is required</span>
            ) : (
              ""
            )}
          </div>

          <div className="auth-info mb-2">
            Back to
            <NavLink to="/auth/login"> Sign In</NavLink>
          </div>
          <button className="btn-primary w-100 border rounded-6" type="submit">
            Reset Password
          </button>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
