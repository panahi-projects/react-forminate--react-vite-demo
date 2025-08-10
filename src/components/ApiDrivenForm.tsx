import { DynamicForm } from "../../../react-forminate/src";
import { ApiDrivenFormData } from "../data";

const ApiDrivenForm = () => {
  const onSubmit = (value: any, isValid: boolean) => {
    console.log({ value });
    console.log({ isValid });
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <DynamicForm
        formId={ApiDrivenFormData.formId}
        formData={ApiDrivenFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ApiDrivenForm;
