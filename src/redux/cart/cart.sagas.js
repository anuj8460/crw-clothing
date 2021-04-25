import { takeLatest, put, call, all } from "redux-saga/effects";
import { UserActionsTypes } from "./../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartonSignOut() {
  yield put(clearCart());
}

export function* onSignoutSuccess() {
  yield takeLatest(UserActionsTypes.SIGN_OUT_SUCCESS, clearCartonSignOut);
}

export function* cartSagas() {
  yield all([call(onSignoutSuccess)]);
}
