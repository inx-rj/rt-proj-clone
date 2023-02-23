import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import ResetPassword from "../../components/auth/ResetPassword";
import OnePageLayout from "../../layouts/OnePageLayout";

const ResetPasswordPage = () => {
  const location = useLocation();
  const tokenFromUrl = new URLSearchParams(location.search).get("token");
  return (
    <OnePageLayout>
      <>
        <div className="mb-10">
          <h3 className="welcome-title">Reset Password!</h3>
          <p className="mb-0 welcome-desc">
            Please enter new password to login
          </p>
        </div>
        <Suspense fallback={""}>
          <ResetPassword token={tokenFromUrl} />
        </Suspense>
      </>
    </OnePageLayout>
  );
};

export default ResetPasswordPage;
