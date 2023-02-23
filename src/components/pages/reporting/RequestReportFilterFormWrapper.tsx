import { Form, Formik } from "formik";
import Button from "../../common/button/Button";
import { Input } from "../../fields";
import FormikReactSelect from "../../fields/selection/FormikReactSelect";

const RequestReportFilterFormWrapper = () => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values) => console.log("Filter", values)}
    >
      {({}) => (
        <>
          <Form>
            <div className="grid grid-cols-3 gap-4">
              <FormikReactSelect
                placeholder="Messaging"
                options={[{ label: "label", value: "value" }]}
                name="report_type"
                label="Report Type"
              />
              <Input type="date" name="start_date" label="Start Date" />
              <Input type="date" name="end_date" label="End Date" />
            </div>
            <Button text={"Generate Usage Report"} className="mt-7" />
          </Form>
        </>
      )}
    </Formik>
  );
};

export default RequestReportFilterFormWrapper;
