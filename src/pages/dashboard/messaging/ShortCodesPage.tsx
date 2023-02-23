import { lazy, Suspense } from "react";

const PageHeading = lazy(
  () => import("../../../components/heading/PageHeading")
);

const ShortCodesPage = () => {
  return (
    <>
      <Suspense fallback="">
        <PageHeading title="ShortCodes" />
      </Suspense>
    </>
  );
};

export default ShortCodesPage;
