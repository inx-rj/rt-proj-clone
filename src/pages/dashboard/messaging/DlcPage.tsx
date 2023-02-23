import { lazy, Suspense } from "react";

const PageHeading = lazy(
  () => import("../../../components/heading/PageHeading")
);

const DlcPage = () => {
  return (
    <>
      <Suspense fallback="">
        <PageHeading title="10DLC" />
      </Suspense>
    </>
  );
};

export default DlcPage;
