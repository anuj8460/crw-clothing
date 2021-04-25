import { UserActionsTypes } from "./user.types";
export const setCurrentUser = (user) => ({
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionsTypes.GOOGLE_SIGNIN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionsTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const SignInSuccess = (user) => ({
  type: UserActionsTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const SignInFailure = (error) => ({
  type: UserActionsTypes.SIGNIN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserActionsTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionsTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionsTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: UserActionsTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionsTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionsTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionsTypes.SIGN_UP_FAILURE,
  payload: error,
});
