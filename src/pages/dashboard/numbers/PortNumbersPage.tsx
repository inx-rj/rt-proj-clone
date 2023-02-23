import { lazy, Suspense } from "react";

const PageHeading = lazy(
  () => import("../../../components/heading/PageHeading")
);

const PortNumbersPage = () => {
  return (
    <>
      <Suspense fallback="">
        <PageHeading title="Port Numbers" />
      </Suspense>
    </>
  );
};

export default PortNumbersPage;
