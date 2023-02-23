import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { lazy, Suspense, useEffect, useState } from "react";
import { useSingleEffect } from "react-haiku";
import { TRIGGER_NAVIGATION_TAB_CONFIG } from "../../../redux/actions/config/global/global.actions";
import { settingsNavType } from "../../../helper/initialStates/dashboard/accountSettings/settingsState";
import { Form, Formik } from "formik";
import { Input, Avatar } from "../../../components/fields";
import Button from "../../../components/common/button/Button";
import { USER_DATA } from "../../../redux/reducers/auth/auth.slice";
import { updateUserDetails } from "../../../helper/initialStates/auth/authState";
import { UPDATE_USER_DETAILS } from "../../../redux/actions/dashboard/settings/myAccount.actions";

const NavigationCardTitle = lazy(
  () => import("../../../components/common/navigation/NavigationCardTitle")
);

const MyAccountPage = (props) => {
  const value = useAppSelector(USER_DATA);

  const { onSubmitLogin } = props;
  const [initialValues, setInitialValues] = useState(updateUserDetails);

  const dispatch = useAppDispatch();

  useSingleEffect(() => {
    dispatch(
      TRIGGER_NAVIGATION_TAB_CONFIG("settings", settingsNavType.MY_ACCOUNT)
    ).then((r) => r);
  });

  useEffect(() => {
    if (value) {
      setInitialValues(value.data.user_details);
    }
  }, [value]);

  return (
    <>
      <Suspense fallback="">
        <NavigationCardTitle title={settingsNavType.MY_ACCOUNT} />
      </Suspense>
      <div className="p-5">
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={(values) => {
            dispatch(UPDATE_USER_DETAILS(values));
            onSubmitLogin(true);
          }}
        >
          {() => (
            <Form>
             
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Input
                    name="first_name"
                    type="text"
                    placeholder="Enter First Name"
                    label="First Name"
                  />
                </div>
                <div>
                  <Input
                    name="last_name"
                    type="text"
                    placeholder="Enter Last Name"
                    label="Last Name"
                  />
                </div>
                <div>
                  <Input
                    name="company_name"
                    type="text"
                    placeholder="Enter Company Name"
                    label="Company"
                  />
                </div>
                <div>
                  <Input
                    name="phone_number"
                    type="text"
                    placeholder="Enter Contact Number"
                    label="Contact Number"
                    disabled
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter Contact Email"
                    label="Contact Email"
                    disabled
                  />
                </div>

                <div className="flex justify-start gap-5 mt-3 col-span-3">
                  <Button
                    type="submit"
                    className="px-5 btn btn-primary"
                    text="Save"
                  />
                  <Button
                    type="button"
                    className="px-5 btn btn-outline hover:text-white "
                    text="Cancel"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default MyAccountPage;
