import React from "react";
import "./signIn-signUp.scss";
import SignIn from "../../components/sign-in/sign-in";
import signUp from "../../components/sign-up/sign-up";
import SignUp from "../../components/sign-up/sign-up";

const SignInSignUpPage = () => (
  <div className="sigIn-signUp">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
