import { lazy, Suspense } from "react";
import { Formik } from "formik";

const CreateApiKeyForm = lazy(() => import("./FilterForm"));

const FilterFormWrapper = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{}}
      onSubmit={(values) => { }}
    >
      {({ }) => (
        <>
          <Suspense fallback="">
            <CreateApiKeyForm />
          </Suspense>
        </>
      )}
    </Formik>
  );
};

export default FilterFormWrapper;
