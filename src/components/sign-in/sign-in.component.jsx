import React, { useState } from "react";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.styles";
import FormInput from "./../form-input/form-input.components";
import CustomButton from "./../custom-button/custom-button.component";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "./../../redux/user/user.actions";
// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }
//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const { emailSignInStart } = this.props;
//     const { email, password } = this.state;
//     emailSignInStart(email, password);
//   };
//   handleChange = (event) => {
//     const { value, name } = event.target;
//     this.setState({ [name]: value });
//   };
//   render() {
//     const { googleSignInStart } = this.props;
//     return (
//       <div className="sign-in">
//         <h2>I Already have account </h2>
//         <span>Sign in with your email and passowrd</span>
//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             name="email"
//             type="email"
//             value={this.state.email}
//             handleChange={this.handleChange}
//             label="Email"
//             required
//           />
//           <FormInput
//             name="password"
//             type="password"
//             value={this.state.password}
//             handleChange={this.handleChange}
//             label="Password"
//             required
//           />
//           <div className="buttons">
//             <CustomButton type="submit" value="Submit Form">
//               SIGN IN
//             </CustomButton>
//             <CustomButton
//               type="button"
//               onClick={googleSignInStart}
//               isGoogleSignIn
//             >
//               Sign in with Google
//             </CustomButton>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
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
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
