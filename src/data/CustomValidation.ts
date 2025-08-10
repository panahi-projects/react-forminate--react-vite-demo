import { ChangeEvent } from "react";
import { FormDataCollectionType } from "../../../react-forminate/src";

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

const FormData: FormDataCollectionType = {
  formId: "CustomValidation",
  title: "Custom Validation Example",
  fields: [
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
      events: {
        onCustomChange: (e, fieldId, values, fieldSchema, formSchema) => {
          const value = e.target.value;
          console.log("Custom Change Event Value:", value);
          console.log("Field ID:", fieldId);
          console.log("State Value:", values[fieldId]);
          console.log("All values:", values);
          console.log("Field Schema:", fieldSchema);
          console.log("Form Schema:", formSchema);
        },
        onCustomContextMenu: (e, fieldId, values, fieldSchema, formSchema) => {
          e.preventDefault(); // Prevent the default context menu from appearing
          const value = (e.target as any).value;
          console.log("Custom Change Event Value:", value);
          console.log("Field ID:", fieldId);
          console.log("State Value:", values[fieldId]);
          console.log("All values:", values);
          console.log("Field Schema:", fieldSchema);
          console.log("Form Schema:", formSchema);
        },
      },
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
      placeholder: "Enter your name",
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
      events: {
        onCustomChange: (e, fieldId, values, fieldSchema, formSchema) => {
          const value = e.target.value;
          console.log("Custom Change Event Value:", value);
          console.log("Field ID:", fieldId);
          console.log("State Value:", values[fieldId]);
          console.log("All values:", values);
          console.log("Field Schema:", fieldSchema);
          console.log("Form Schema:", formSchema);
        },
      },
      visibility: true,
      ...radioStyles,
    },
    {
      fieldId: "fire_safety",
      label: "Do you have fire safety measures?",
      type: "checkbox",
      options: ["Smoke Detectors", "Fire Extinguishers", "Sprinkler System"],
      required: true,
      events: {
        onCustomChange: (e, fieldId, values, field, formSchema) => {
          const value = e.target.value;
          console.log("Target value:", value);

          console.log("Field ID:", fieldId);
          console.log("All values:", values);
          console.log("Field value:", values[fieldId]);
          console.log("Field:", field);
          console.log("Form schema:", formSchema);
        },
      },
      ...radioStyles,
    },
  ],
};

export default FormData;
