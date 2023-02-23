import { lazy, Suspense } from "react";
import { Formik } from "formik";
import { useAppDispatch } from "../../../../redux/store";
import {
  ADD_COMPANY_DETAILS,
  DELETE_COMPANY,
  UPDATE_COMPANY,
} from "../../../../redux/actions/dashboard/settings/company.actions";
import { handleErrors } from "../../../utility/handleError";
import { ActionTypes } from "../../../../helper/actions";
import { CompanyListTypes } from "../../../../helper/types/pages/dashboard/accountSettings/CompanyTypes";
import { CompanyCreateResponse } from "../../../../helper/initialStates/dashboard/accountSettings/CompanyState";
import { toast } from "react-toastify";
import ToastErrorIcon from "../../../UI/ToastErrorIcon";
import DeleteCompany from "./DeleteCompany";
import { SET_COMPANY_LOADING } from "../../../../redux/reducers/dashboard/settings/company.slice";

const CompanyForm = lazy(() => import("./CompanyForm"));

interface CompanyFormWrapperType {
  type: string;
  data?: CompanyListTypes;
}
const CompanyFormWrapper = (props: CompanyFormWrapperType) => {
  const { type, data } = props;
  const dispatch = useAppDispatch();
  const handleCompanyForm = (values, actions) => {
    const updatedValues = {
      ...values,
      phone_number: `+${values.phone_number}`,
    };
    if (type === ActionTypes.CREATE) {
      dispatch(ADD_COMPANY_DETAILS(updatedValues))
        .then()
        .catch((error) => {
          if (error?.response && error?.response?.status === 400) {
            toast.error(error.response.data.message, {
              icon: ToastErrorIcon,
              toastId: 'add_company_details_error'
            });
            handleErrors(error?.response?.data?.data, actions.setErrors);
          }
        })
        .finally(() => {
          actions.setSubmitting(false);
          dispatch(SET_COMPANY_LOADING(false));
        });
    } else if (type === ActionTypes.UPDATED) {
      dispatch(UPDATE_COMPANY(updatedValues))
        .then()
        .catch((exception) => {
          console.log("SERVER", exception);
          toast.error(exception.response.data.message, {
            icon: ToastErrorIcon,
            toastId: 'update_company_error'
          });
          if (exception.response && exception.response.status === 400) {
            handleErrors(exception.response.data.data, actions.setErrors);
          }
        })
        .finally(() => {
          actions.setSubmitting(false);
        });
    } else {
      dispatch(DELETE_COMPANY(data))
        .then()
        .catch((exception) => {
          if (exception.response && exception.response.status === 400) {
            handleErrors(exception.response.data.data, actions.setErrors);
          }
        })
        .finally(() => {
          actions.setSubmitting(false);
        });
    }
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={
          type === ActionTypes.CREATE ? CompanyCreateResponse : data
        }
        // validationSchema={addCompanySchema}
        onSubmit={(values, actions) => {
          handleCompanyForm(values, actions);
        }}
      >
        {({ isSubmitting }) =>
          type !== ActionTypes.DELETE ? (
            <Suspense fallback="">
              <CompanyForm type={type} />
            </Suspense>
          ) : (
            <Suspense fallback="">
              <DeleteCompany data={data} isSubmitting={isSubmitting} />
            </Suspense>
          )
        }
      </Formik>
    </>
  );
};

export default CompanyFormWrapper;
