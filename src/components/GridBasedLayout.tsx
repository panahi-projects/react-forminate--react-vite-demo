import { DynamicForm } from "../../../react-forminate/src";
import { GridBasedLayoutData } from "../data";

const GridBasedLayout = () => {
  const onSubmit = (value: any, isValid: boolean) => {
    console.log({ value });
    console.log({ isValid });
  };
  return (
    <div className="max-w-md mx-auto my-8">
      <DynamicForm
        formId={GridBasedLayoutData.formId}
        formData={GridBasedLayoutData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default GridBasedLayout;
