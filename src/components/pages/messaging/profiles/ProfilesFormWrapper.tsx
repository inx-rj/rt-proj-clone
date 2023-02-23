import { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Form, Formik } from "formik";
import { ActionTypes } from "../../../../helper/actions";

const ProfileForm = lazy(() => import("./ProfileForm"));
const PageHeading = lazy(() => import("../../../heading/PageHeading"));
const ContentLayout = lazy(() => import("../../../../layouts/ContentLayout"));

interface ProfilesFormWrapperType {
  id?: string;
  type: string;
}

const ProfilesFormWrapper = (props: ProfilesFormWrapperType) => {
  const { type, id } = props;

  const handleFormSubmission = (values) => { };

  return (
    <>
      <Suspense fallback="">
        <PageHeading
          title={
            type === ActionTypes.UPDATED ? "Update Profiles" : "Add Profiles"
          }
        />
      </Suspense>
      <ContentLayout disableHeader>
        <Formik
          enableReinitialize={true}
          initialValues={{}}
          onSubmit={(values) => {
            handleFormSubmission(values);
          }}
        >
          {() => (
            <Form>
              <Suspense fallback="loading...">
                <ProfileForm type={type} />
              </Suspense>
            </Form>
          )}
        </Formik>
      </ContentLayout>
    </>
  );
};
ProfilesFormWrapper.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
};
export default ProfilesFormWrapper;
