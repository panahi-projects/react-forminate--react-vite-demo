import { DynamicForm } from "../../../react-forminate/src";
import { ContainerFormData } from "../data";

const ContainerForm = () => {
  const onSubmit = (value: any, isValid: boolean) => {
    console.log({ value });
    console.log({ isValid });
  };
  return (
    <div className="max-w-lg mx-auto my-8">
      <DynamicForm
        formId={ContainerFormData.formId}
        formData={ContainerFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ContainerForm;
