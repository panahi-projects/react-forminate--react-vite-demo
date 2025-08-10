// import {
//   DynamicForm,
//   FormProvider as CustomProvider,
//   useForm,
// } from "react-forminate";
import React, { useState } from "react";
import {
  DynamicForm,
  FormProvider as CustomProvider,
  useFormValues,
  useFormErrors,
  useFormMeta,
  useFormActions,
} from "../../../../react-forminate/src";
import { CustomSubmitFormData } from "../../data";

import "./CustomFormSubmit.css";

/**
 * CustomSubmit Component
 *
 * Demonstrates how to implement a custom form submit button with React-Forminate.
 * Wraps the form in a CustomProvider to enable form state management.
 */
export const CustomSubmitExample = () => {
  return (
    <div className="form-example-container">
      <CustomProvider
        formId={CustomSubmitFormData.formId}
        formSchema={CustomSubmitFormData}
      >
        <FormContent />
      </CustomProvider>
    </div>
  );
};

/**
 * SmartSubmitButton Component
 *
 * A reusable custom submit button with:
 * - Loading state
 * - Error detection
 * - Form completion check
 * - Auto-scroll to first error
 */
const SmartSubmitButton = () => {
  const values = useFormValues();
  const errors = useFormErrors();
  const { touched } = useFormMeta();
  const { validateForm } = useFormActions();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const isValid = validateForm(CustomSubmitFormData);

      if (!isValid) {
        // Scroll to first error field for better UX
        const firstError = Object.keys(errors)[0];
        document.getElementById(firstError)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        return;
      }

      // Form is valid - proceed with submission
      console.log("Submitting form values:", values);
      // await api.submitForm(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determine button state
  const hasErrors = Object.keys(errors).some((key) => touched[key]);
  const isComplete =
    Object.keys(values).length === CustomSubmitFormData.fields.length;
  const isDisabled = isSubmitting || (hasErrors && isComplete);

  return (
    <button
      className={`submit-button 
        ${isSubmitting ? "loading" : ""}
        ${hasErrors ? "has-errors" : ""}
        ${!isComplete ? "incomplete" : ""}
      `}
      onClick={handleSubmit}
      disabled={isDisabled}
      aria-busy={isSubmitting}
    >
      {isSubmitting ? (
        <span className="loading-indicator">Processing...</span>
      ) : hasErrors ? (
        "Please Fix Errors"
      ) : !isComplete ? (
        "Complete All Fields"
      ) : (
        "Submit Application"
      )}
    </button>
  );
};

/**
 * FormContent Component
 *
 * Contains the actual form implementation with:
 * - DynamicForm component
 * - Custom submit button
 * - Form submission handler
 */
const FormContent = () => {
  return (
    <div className="form-container">
      {/* 
        DynamicForm renders all form fields from formData 
        We hide the default submit button since we're using our custom one
      */}
      <DynamicForm
        formId={CustomSubmitFormData.formId}
        formData={CustomSubmitFormData}
      />

      {/* Our enhanced submit button component */}
      <div className="form-actions">
        <SmartSubmitButton />
      </div>
    </div>
  );
};
