import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInSttart
} from "../../redux/user/user.actions";
import "./sign-in.styles.scss";

const SignIn = ({ emailSignInSttart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInSttart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h1>Already have an account?</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInSttart: (email, password) =>
    dispatch(emailSignInSttart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
