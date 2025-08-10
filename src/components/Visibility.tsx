import { DynamicForm } from "../../../react-forminate/src";
import { Visibility as VisibilityData } from "../data";

const Visibility = () => {
  const onSubmit = (value: any, isValid: boolean) => {
    console.log({ value });
    console.log({ isValid });
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <DynamicForm
        formId={VisibilityData.formId}
        formData={VisibilityData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Visibility;
