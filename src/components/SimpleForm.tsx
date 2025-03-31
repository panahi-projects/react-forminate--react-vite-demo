import { DynamicForm } from "../../../react-forminate/src";
import { SimpleFormData } from "../data";

const SimpleForm = () => {
  const onSubmit = (value: any, isValid: boolean) => {
    console.log({ value });
    console.log({ isValid });
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <DynamicForm
        formId={SimpleFormData.formId}
        formData={SimpleFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SimpleForm;
