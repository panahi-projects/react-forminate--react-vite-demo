import {
  DynamicForm,
  FormProvider as CustomProvider,
  useForm,
} from "../../../react-forminate/src";
import { CustomSubmitFormData } from "../data";

const CustomSubmit = () => {
  return (
    <div>
      {/* Wrap CustomForm inside CustomProvider */}
      <CustomProvider
        formId={CustomSubmitFormData.formId}
        formSchema={CustomSubmitFormData}
      >
        <CustomForm />
      </CustomProvider>
    </div>
  );
};

const CustomForm = () => {
  const { values, validateForm } = useForm(); // Now useForm() is inside CustomProvider

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("values: ", values);

    const isValid = validateForm(CustomSubmitFormData);
    console.log(`Form is: ${isValid ? "valid" : "invalid"}`);
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <DynamicForm
        formId={CustomSubmitFormData.formId}
        formData={CustomSubmitFormData}
        submitDetails={{ visibility: false }}
        customProvider={CustomProvider} // Pass the custom provider to DynamicForm
      />
      <button
        style={{
          backgroundColor: "#d8049c",
          border: "none",
          color: "#fff",
          padding: "8px 16px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer",
          margin: "12px 0",
        }}
        onClick={onSubmit}
      >
        Submit Form
      </button>
    </div>
  );
};

export default CustomSubmit;
