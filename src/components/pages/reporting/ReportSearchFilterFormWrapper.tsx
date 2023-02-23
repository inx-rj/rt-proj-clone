import { Form, Formik } from "formik";
import Button from "../../common/button/Button";
import { Input } from "../../fields";
import FormikReactSelect from "../../fields/selection/FormikReactSelect";

const ReportSearchFilterFormWrapper = () => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values) => console.log("Filter", values)}
    >
      {({}) => (
        <>
          <Form>
            <div className="grid grid-cols-3 gap-4">
              <Input name="num_id" label="Number or Record ID" />
              <Input type="date" name="start_date" label="Start Date" />
              <Input type="date" name="end_date" label="End Date" />
              <FormikReactSelect
                placeholder="CLI (from Number)"
                options={[{ label: "label", value: "value" }]}
                name="cli"
                label="Filters"
              />
              <FormikReactSelect
                placeholder="Messaging"
                options={[{ label: "label", value: "value" }]}
                name="report_type"
                label="Report Type"
              />
              <FormikReactSelect
                placeholder="Outbound"
                options={[{ label: "label", value: "value" }]}
                name="message_type"
                label="Message Type"
              />
            </div>
            <div className="card mt-5 grid grid-cols-1 gap-3">
              <div className="grid grid-cols-3 gap-4 ">
                <div className="flex gap-2 items-center justify-between">
                  <div className="max-w-[calc(100%-150px)] w-full">
                    <FormikReactSelect
                      placeholder="AND"
                      options={[{ label: "label", value: "value" }]}
                      name="and"
                    />
                  </div>
                  <p>CLI (from Number)</p>
                </div>
                <FormikReactSelect
                  placeholder="Contains"
                  options={[{ label: "label", value: "value" }]}
                  name="contains"
                />
                <div className="flex gap-2">
                  <div className="max-w-[calc(100%-20px)] w-full">
                    <Input type="number" name="count" placeholder="-10" />
                  </div>
                  <Button
                    icon="material-symbols:close-rounded"
                    className="p-0 rounded-none min-w-[auto] text-info bg-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 ">
                <div className="flex gap-2 items-center justify-between">
                  <div className="max-w-[calc(100%-150px)] w-full">
                    <FormikReactSelect
                      placeholder="OR"
                      options={[{ label: "label", value: "value" }]}
                      name="or"
                    />
                  </div>
                  <p>CLD (to Number)</p>
                </div>
                <FormikReactSelect
                  placeholder="Starts With"
                  options={[{ label: "label", value: "value" }]}
                  name="starts_with"
                />
                <div className="flex gap-2">
                  <div className="max-w-[calc(100%-20px)] w-full">
                    <Input type="number" name="count" placeholder="-10" />
                  </div>
                  <Button
                    icon="material-symbols:close-rounded"
                    className="p-0 rounded-none min-w-[auto] text-info bg-transparent"
                  />
                </div>
              </div>
            </div>
            <Button text={"Request Detail Report"} className="mt-7" />
          </Form>
        </>
      )}
    </Formik>
  );
};

export default ReportSearchFilterFormWrapper;
