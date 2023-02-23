import { lazy, Suspense } from "react";
import { Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { useSingleEffect } from "react-haiku";
import {
  ADD_API_KEY,
  DELETE_API_KEY,
  GENERATE_API_KEY,
} from "../../../../redux/actions/dashboard/settings/createApiKey.actions";
import { CreateApiKeyStateResponse } from "../../../../helper/initialStates/dashboard/accountSettings/CreateApiKeyState";
import { GET_API_KEY } from "../../../../redux/reducers/dashboard/settings/createApiKey.slice";
import cloneDeep from "lodash.clonedeep";
import { handleErrors } from "../../../utility/handleError";
import { ActionTypes } from "../../../../helper/actions";
import { ApiKeyTableListType } from "../../../../helper/types/pages/dashboard/accountSettings/CreateApiKeyTypes";
import DeleteApiKey from "./DeleteApiKey";

const CreateApiKeyForm = lazy(() => import("./CreateApiKeyForm"));

interface CreateApiKeyFormWrapperType {
  type?: string;
  data?: ApiKeyTableListType;
}

const CreateApiKeyFormWrapper = (props: CreateApiKeyFormWrapperType) => {
  const { type, data } = props;
  const generatedApiKey = useAppSelector(GET_API_KEY);
  const dispatch = useAppDispatch();

  useSingleEffect(() => {
    dispatch(GENERATE_API_KEY()).then((r: void) => r);
  });

  const handleCreateApiKeyForm = async (values, actions) => {
    if (type === ActionTypes.DELETE) {
      dispatch(DELETE_API_KEY(data))
        .then()
        .catch((exception) => {
          if (exception.response && exception.response.status === 400) {
            handleErrors(exception.response.data.data, actions.setErrors);
          }
        })
        .finally(() => {
          actions.setSubmitting(false);
        });
    } else {
      const updatedValues = cloneDeep(values);
      await dispatch(ADD_API_KEY(updatedValues))
        .then()
        .catch((error) => {
          if (error?.response && error?.response?.status === 400) {
            handleErrors(error?.response?.data?.data, actions.setErrors);
          }
        })
        .finally(() => {
          actions.setSubmitting(false);
        });
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={CreateApiKeyStateResponse}
      onSubmit={(values, actions) => {
        values["api_key"] = generatedApiKey;
        handleCreateApiKeyForm(values, actions);
      }}
    >
      {({ isSubmitting }) =>
        type !== ActionTypes.DELETE ? (
          <Suspense fallback="">
            <CreateApiKeyForm
              isSubmitting={isSubmitting}
              generatedApiKey={generatedApiKey}
            />
          </Suspense>
        ) : (
          <Suspense fallback="">
            <DeleteApiKey data={data} isSubmitting={isSubmitting} />
          </Suspense>
        )
      }
    </Formik>
  );
};

export default CreateApiKeyFormWrapper;
