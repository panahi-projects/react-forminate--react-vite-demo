import React, { useState } from "react";
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

const SmartSubmitButton = () => {
  const { values, errors, validateForm, touched } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isValid = validateForm(CustomSubmitFormData);
    if (!isValid) {
      // Scroll to first error
      console.error("Form is not valid!", errors);
      const firstError = Object.keys(errors)[0];
      document.getElementById(firstError)?.scrollIntoView();
    } else {
      console.info("Form is valid and submit...");
      // await submitToServer(values);
    }

    setIsSubmitting(false);
  };

  const hasErrors = Object.keys(errors).some((key) => touched[key]);
  const isComplete =
    Object.keys(values).length === CustomSubmitFormData.fields.length;

  return (
    <button
      className={`submit-btn 
        ${hasErrors ? "error-state" : ""}
        ${!isComplete ? "incomplete-state" : ""}
      `}
      onClick={handleSubmit}
      disabled={isSubmitting}
    >
      {isSubmitting
        ? "Loading..."
        : hasErrors
          ? "Fix Errors to Submit"
          : "Submit Application"}
    </button>
  );
};

const CustomForm = () => {
  const { values, validateForm } = useForm(); // Now useForm() is inside CustomProvider

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid: boolean = await validateForm(CustomSubmitFormData);
    console.log(`Form is: ${isValid ? "valid" : "invalid"}`);

    console.log("values: ", values);
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <DynamicForm
        formId={CustomSubmitFormData.formId}
        formData={CustomSubmitFormData}
        submitDetails={{ visibility: false }}
        customProvider={CustomProvider} // Pass the custom provider to DynamicForm
      />
      <SmartSubmitButton />
      {/* <button
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
      </button> */}
    </div>
  );
};

export default CustomSubmit;
