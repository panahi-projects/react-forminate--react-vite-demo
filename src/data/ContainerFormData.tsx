import React from "react";
import { FormDataCollectionType } from "../../../react-forminate/src";

const Header: React.FC = () => {
  return (
    <h2 className="text-2xl font-bold text-amber-700 mb-6">
      Form with Container Example
    </h2>
  );
};
const Footer: React.FC = () => {
  return (
    <h2 className="text-sm font-bold text-blue-500 my-4">
      This is the sample text for footer
    </h2>
  );
};

export const FormData: FormDataCollectionType = {
  formId: "ContainerFormData",
  title: "Container Form Example",
  fields: [
    {
      fieldId: "container_1",
      type: "container",
      columns: 2,
      header: <Header />,
      footer: <Footer />,
      itemsParentAttributes: {
        description: {
          colSpan: 2,
        },
        "spacer-1": {
          colSpan: 2,
        },
      },
      fields: [
        {
          fieldId: "name",
          label: "Name",
          type: "text",
          required: true,
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
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
          label: "Email",
          type: "text",
          required: true,
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName: "block mb-2 text-sm font-medium text-gray-900",
          placeholder: "Enter your email",
          autoComplete: "off",
        },
        {
          fieldId: "spacer-1",
          type: "spacer",
          className: "h-4 w-full",
          height: "50px",
          // children: (
          //   <div className="h-1 w-full bg-orange-200 border border-orange-300 rounded-lg"></div>
          // ),
        },
        {
          fieldId: "level",
          label: "Level",
          type: "select",
          options: ["Low", "Medium", "High"],
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName: "block mb-2 text-sm font-medium text-gray-900",
        },
        {
          fieldId: "dob",
          label: "Date of Birth",
          type: "date",
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName: "block mb-2 text-sm font-medium text-gray-900",
        },
        {
          fieldId: "description",
          label: "Description",
          type: "textarea",
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName: "block mb-2 text-sm font-medium text-gray-900",
          placeholder: "Enter your description",
          rows: 4,
        },
      ],
    },
  ],
};
