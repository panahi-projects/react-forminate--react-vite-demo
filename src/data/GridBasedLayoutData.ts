import { FormDataCollectionType } from "../../../react-forminate/src";

const FormData: FormDataCollectionType = {
  formId: "SimpleForm",
  title: "Simple Form Example",
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
    },

    {
      fieldId: "email",
      label: "Email",
      type: "text",
      required: true,
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      labelClassName:
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      placeholder: "Enter your email",
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
  ],
};

export default FormData;
