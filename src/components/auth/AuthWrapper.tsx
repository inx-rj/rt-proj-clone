import { lazy, Suspense, useState } from "react";
import { TOGGLE_LOGIN_TAB } from "../../redux/actions/auth/auth.actions";
import { IS_LOGIN_TAB_ACTIVE } from "../../redux/reducers/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Button from "../common/button/Button";

const Signup = lazy(() => import("./Signup"));
const Login = lazy(() => import("./Login"));

const AuthWrapper = () => {
  const dispatch = useAppDispatch();
  const isLoginTabActive = useAppSelector(IS_LOGIN_TAB_ACTIVE);

  return (
    <>
      <div className="flex justify-center mb-14">
        <Button
          text="Login"
          className={`max-w-[210px] w-full min-h-[40px] text-base rounded-tr-none rounded-br-none ${
            isLoginTabActive ? "" : "disabled"
          }`}
          onClick={() => dispatch(TOGGLE_LOGIN_TAB(true))}
        />
        <Button
          text="Sign Up"
          className={`max-w-[210px] w-full min-h-[40px] text-base rounded-tl-none rounded-bl-none  ${
            isLoginTabActive ? "disabled" : ""
          } `}
          onClick={() => dispatch(TOGGLE_LOGIN_TAB(false))}
        />
      </div>

      {isLoginTabActive ? (
        <Suspense fallback="">
          <Login />
        </Suspense>
      ) : (
        <Suspense fallback="">
          <Signup />
        </Suspense>
      )}
    </>
  );
};

export default AuthWrapper;
