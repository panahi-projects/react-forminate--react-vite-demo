import { FormDataCollection } from "../../../react-forminate/src";

const styles: Record<string, React.CSSProperties> = {
  labelStyles: {
    fontWeight: "bold",
    color: "#fff",
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
    color: "#f1f1f1",
  },
};

const FormData: FormDataCollection = {
  formId: "Visibility",
  title: "Visibility Example",
  fields: [
    {
      fieldId: "name",
      label: "Name",
      type: "text",
      required: true,
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      labelClassName:
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      placeholder: "Enter your name",
      validation: {
        pattern: "^[a-zA-Z ]+$",
        message: "Name should contain only letters and spaces",
      },
      autoComplete: "off",
    },
    {
      fieldId: "email",
      label: "Email (with custom validation)",
      type: "text",
      required: true,
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      labelClassName:
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      placeholder: "Enter your email",
      validation: {
        pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
        message: "Enter a valid email address",
      },
      visibility: true,
    },
    {
      fieldId: "level",
      label: "Level",
      type: "select",
      options: ["Low", "Medium", "High"],
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      labelClassName:
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
    },
    {
      fieldId: "dob",
      label: "Date of Birth",
      type: "date",
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      labelClassName:
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
    },
    {
      fieldId: "gender",
      type: "radio",
      label: "Gender",
      options: ["Male", "Female"],
      ...styles,
      visibility: true,
    },
  ],
};

export default FormData;
