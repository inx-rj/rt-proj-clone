import { lazy, Suspense } from "react";

const PageHeading = lazy(() => import("../../components/heading/PageHeading"));

const HomePage = () => {
  return (
    <>
      <Suspense fallback="">
        <PageHeading title="Dashboard" />
      </Suspense>
    </>
  );
};

export default HomePage;
