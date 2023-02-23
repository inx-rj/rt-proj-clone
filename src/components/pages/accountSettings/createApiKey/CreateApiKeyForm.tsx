import { Form, useFormikContext } from "formik";
import { Checkbox, Input, Switch } from "../../../fields";
import { Icon } from "@iconify/react";
import PopupClose from "../../../common/popupclose/PopupClose";
import Button from "../../../common/button/Button";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import {
  GET_COMPANY_DATA,
  GET_COMPANY_LIST_DATA,
} from "../../../../redux/reducers/dashboard/settings/company.slice";
import { useSingleEffect } from "react-haiku";
import { GET_COMPANY_LIST } from "../../../../redux/actions/dashboard/settings/company.actions";
import { GET_TABLE_CONFIG } from "../../../../redux/reducers/config/table/table.slice";
import useCopyToClipboard from "../../../../hooks/useCopyToClipboard";
import FormikReactSelect from "../../../fields/selection/FormikReactSelect";
import { encryptAPIKey } from "../../../../helper/utility/functions";

interface CreateApiKeyFormType {
  generatedApiKey: string;
  isSubmitting?: boolean;
}

const CreateApiKeyForm = (props: CreateApiKeyFormType) => {
  const { isSubmitting, generatedApiKey } = props;  

  const formikProps = useFormikContext();
  const dispatch = useAppDispatch();
  const company_list = useAppSelector(GET_COMPANY_LIST_DATA);
  const company_data = useAppSelector(GET_COMPANY_DATA);
  const tableConfig = useAppSelector(GET_TABLE_CONFIG);
  const { copyToClipboard } = useCopyToClipboard();

  const listOfCompanies = company_list.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  useSingleEffect(() => {
    if (!company_data?.hasData)
      dispatch(GET_COMPANY_LIST(tableConfig)).then((r: void) => r);
  });

  return (
    <>
      <Form>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <Input
              name="api_key"
              inputClass="pr-10"
              placeholder={generatedApiKey}
              value={encryptAPIKey(generatedApiKey)}
              disabled
            />
            <Icon
              className="absolute right-3 bottom-2 text-desc-color"
              icon="mingcute:copy-line"
              cursor="pointer"
              width="22"
              onClick={() => copyToClipboard(generatedApiKey)}
            />
          </div>
          <Checkbox name="attach_to_company" text="Attach To Company" />
          {formikProps.values["attach_to_company"] && (
            <FormikReactSelect
              placeholder="Select Company"
              options={listOfCompanies}
              name="select_company"
            />
          )}

          <div className="flex items-center gap-3 justify-center mt-4">
            <Button
              className="btn-primary"
              type="submit"
              // disabled={isSubmitting}
              text="Save"
            />
            <PopupClose />
          </div>
        </div>
      </Form>
    </>
  );
};

export default CreateApiKeyForm;
