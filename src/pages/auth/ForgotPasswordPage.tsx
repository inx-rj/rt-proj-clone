import { Suspense } from "react";
import ForgotPassword from "../../components/auth/ForgotPassword";
import OnePageLayout from "../../layouts/OnePageLayout";

const ForgotPasswordPage = () => {
  return (
    <OnePageLayout>
      <>
        <div className="mb-10">
          <h3 className="welcome-title">Forgot Password!</h3>
          <p className="mb-0 welcome-desc">
            Confirm your email and we’ll send the instructions.
          </p>
        </div>
        <Suspense fallback={""}>
          <ForgotPassword />
        </Suspense>
      </>
    </OnePageLayout>
  );
};

export default ForgotPasswordPage;
