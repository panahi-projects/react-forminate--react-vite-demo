// import { DynamicForm } from "../../../react-forminate/src";
import { DynamicForm, FormDataCollectionType } from "react-forminate";

const radioStyles: Record<string, React.CSSProperties> = {
  labelStyles: {
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: "4px",
  },
  styles: {
    border: "1px solid #ccc",
    padding: "8px",
    borderRadius: "4px",
    backgroundColor: "#fff",
  },
  itemsStyles: {
    marginRight: "10px",
    marginBottom: "10px",
    color: "#1a1a1a",
  },
};

const CustomValidation: FormDataCollectionType = {
  formId: "CustomValidation",
  title: "Custom Validation Example",
  options: {
    validateFieldsOnBlur: true, //By default it is set to 'true'
  },
  fields: [
    {
      fieldId: "username",
      label: "Username",
      type: "text",
      required: true,
      requiredMessage: "Username is mandatory",
      validation: [
        {
          pattern: "^[a-zA-Z0-9_]{4,20}$",
          message: "4-20 chars: letters, numbers, or underscores only.",
        },
        {
          custom: (value) => {
            return value === "abc" ? false : true;
          },
          message: "Cannot filled with fake data",
        },
      ],
      className:
        "border border-gray-300 bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    {
      fieldId: "name",
      label: "Name",
      type: "text",
      required: true,
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
      placeholder: "Enter your name",
      requiredMessage: "Name is required",
      validation: [
        {
          pattern: "^[a-zA-Z ]+$",
          message: "Name should contain only letters and spaces",
        },
        {
          minLength: 3,
          message: "Name should be at least 3 characters long",
        },
      ],
      autoComplete: "off",
    },
    {
      fieldId: "email",
      label: "Email (with custom validation)",
      type: "text",
      required: true,
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
      placeholder: "Enter your email",
      validation: [
        {
          pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
          message: "Enter a valid email address",
        },
      ],
      visibility: true,
    },
    {
      fieldId: "level",
      label: "Level",
      type: "select",
      options: ["Low", "Medium", "High"],
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
      required: true,
      requiredMessage: "Level is required",
      events: {
        onCustomChange: (e, fieldId, values, fieldSchema, formSchema) => {
          const value = e.target.value;
          console.log("Custom Change Event Value:", value);
          console.log("Field ID:", fieldId);
          console.log("State Value:", values[fieldId]);
          console.log("All values:", values);
          console.log("Field Schema:", fieldSchema);
          console.log("Form Schema:", formSchema);

          const gender = formSchema?.fields.find(
            (field) => field.fieldId === "gender"
          );
          if (gender) gender.visibility = value === "Low" ? false : true;
        },
      },
    },
    {
      fieldId: "dob",
      label: "Date of Birth",
      type: "date",
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    {
      fieldId: "age",
      label: "Age (custom validation)",
      type: "number",
      required: true,
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
      placeholder: "Enter your age",
      validation: [
        {
          min: 18,
          message: "You must be at least 18 years old.",
        },
        {
          max: 40,
          message: "You must be under 40 years old.",
        },
        {
          pattern: "^[0-9]+$",
          message: "Only numbers allowed.",
        },
        {
          custom: (val) => val % 2 === 0,
          message: "Only even numbers are accepted.",
        },
      ],
      autoComplete: "off",
    },
    {
      fieldId: "gender",
      type: "radio",
      label: "Gender",
      options: ["Male", "Female"],
      required: true,
      validation: [
        {
          pattern: "^(?!Male$).+",
          message: "Male should not be selected",
        },
      ],
      visibility: true,
      ...radioStyles,
    },
    {
      fieldId: "experience",
      label: "Years of Experience",
      type: "number",
      required: true,
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
      placeholder: "Enter your Experience",
      validation: [
        {
          min: 1,
          max: 30,
          message: "Must be between 1 and 30",
        },
      ],
      autoComplete: "off",
    },
    {
      fieldId: "fire_safety",
      label: "Do you have fire safety measures?",
      type: "checkbox",
      options: [
        {
          label: "Smoke Detectors",
          value: "1",
        },
        {
          label: "Fire Extinguishers",
          value: "2",
        },
        {
          label: "Sprinkler System",
          value: "3",
        },
      ],
      validation: [
        {
          minItems: 1,
          message: "At least one item should be selected",
        },
      ],
      ...radioStyles,
    },
  ],
};

const ValidationPattern = () => {
  const onSubmit = (value: any, isValid: boolean) => {
    if (isValid) {
      console.log({ value }); //form values
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <DynamicForm
        formId={CustomValidation.formId}
        formData={CustomValidation}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ValidationPattern;
