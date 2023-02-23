import React, { Suspense } from 'react'
import PasswordResetSuccess from '../../components/auth/PasswordResetSuccess';
import OnePageLayout from '../../layouts/OnePageLayout';

const PasswordChangedPage = () => {
  return (
    <div>
      <OnePageLayout>
        <>
          <Suspense fallback={""}>
            <PasswordResetSuccess />
          </Suspense>
        </>
      </OnePageLayout>
    </div>
  );
}

export default PasswordChangedPage