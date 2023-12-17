import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { Tooltip } from "antd";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  function togglePass() {
    setShowPassword(!showPassword);
  }

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
  };

  return (
    <>
      <form
        autoComplete="off"
        className="auth-form d-grid align-items-center p-3 p-sm-4 p-xl-5 h-100 overflow-auto sign-up"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-100">
          <h2 className="gilroy-bold">Sign Up</h2>
          <p className="gilroy-medium">Create an account</p>

          <div className="relative py-2">
            <label htmlFor="first_name">
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              {...register("first_name", { required: "First Name is required" })}
              placeholder="Enter your first name"
              className={`w-100 p-2 mt-1 form-control ${
                errors.first_name ? "error" : ""
              }`}
            />
            {errors.first_name && (
              <span className="required-error">{errors.first_name.message}</span>
            )}
          </div>

          <div className="relative py-2">
            <label htmlFor="last_name">
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="last_name"
              {...register("last_name", { required: "Last Name is required" })}
              placeholder="Enter your last name"
              className={`w-100 p-2 mt-1 form-control ${
                errors.last_name ? "error" : ""
              }`}
            />
            {errors.last_name && (
              <span className="required-error">{errors.last_name.message}</span>
            )}
          </div>

          <div className="relative py-2">
            <label htmlFor="email" className="font-medium">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email address"
              className={`w-100 p-2 mt-1 border form-control ${
                errors.email ? "error" : ""
              }`}
            />
            {errors.email && (
              <span className="required-error">{errors.email.message}</span>
            )}
          </div>
          <div className="relative py-2">
            <label htmlFor="password" className="font-medium">
              Password <span className="required">*</span>
            </label>
            <input
              type={!showPassword ? "password" : "text"}
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              placeholder="Enter the password"
              className={`w-100 p-2 mt-1 border form-control ${
                errors.password ? "error" : ""
              }`}
            />
            <span className="pass-eye" onClick={togglePass}>
              <img
                src={
                  showPassword
                    ? "/assets/images/eye.svg"
                    : "/assets/images/eye-slash.svg"
                }
                alt="eye"
              />
            </span>
            {errors.password && (
              <span className="required-error">{errors.password.message}</span>
            )}
          </div>

          <div className="d-flex align-items-center mb-2">
            <div className="auth-info">
              Already have an account?
              <NavLink to="/auth/login"> Sign In</NavLink>
            </div>
          </div>

          <button
            className="btn btn-primary w-100 Gilroy-medium"
            type="submit"
            disabled={loading}
          >
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUp;
