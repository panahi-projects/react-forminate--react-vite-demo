import { DynamicForm } from "../../../react-forminate/src";
import { DataGridViewFromData } from "../data";

const DataGridView = () => {
  const onSubmit = (value: any, isValid: boolean) => {
    console.log({ value });
    console.log({ isValid });
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <DynamicForm
        formId={DataGridViewFromData.formId}
        formData={DataGridViewFromData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default DataGridView;
