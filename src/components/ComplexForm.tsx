import { DynamicForm } from "../../../react-forminate/src";
import { ComplexFormData } from "../data";

const ComplexForm = () => {
  const onSubmit = (value: any, isValid: boolean) => {
    console.log({ value });
    console.log({ isValid });
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <DynamicForm
        formId={ComplexFormData.formId}
        formData={ComplexFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ComplexForm;
