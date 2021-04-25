import React from "react";
import "./sign-up.styles.scss";
import FormInput from "./../form-input/form-input.components";
import CustomButton from "./../custom-button/custom-button.component";
import { connect } from "react-redux";
import { signUpStart } from "./../../redux/user/user.actions";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password Doesn't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            label="Name"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
