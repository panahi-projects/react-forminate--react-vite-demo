import React from "react";
import {
  DynamicForm,
  FormDataCollectionType,
} from "../../../../../react-forminate/src";

const CustomButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full mt-4">
      <button className="w-full bg-neutral-950 hover:bg-neutral-800 py-3 rounded-md text-neutral-100 transition cursor-pointer">
        {children}
      </button>
    </div>
  );
};

const styles = {
  disableDefaultStyling: true,
  containerClassName: "pb-1",
  className:
    "border border-gray-300 text-gray-900 text-sm py-2 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
  labelClassName: "block mb-1 text-[14px] font-normal text-gray-800",
};

const githubSignupFormSchema: FormDataCollectionType = {
  formId: "githubSignupForm",
  options: {
    submit: {
      visibility: false,
      component: <CustomButton>Create Account</CustomButton>,
    },
  },
  fields: [
    {
      fieldId: "email",
      type: "email",
      label: "Email",
      required: true,
      requiredMessage: "Email cannot be blank", // has error
      validation: [{ type: "email" }],
      placeholder: "Email",
      autoCorrect: "off",
      ...styles,
    },
    {
      fieldId: "password",
      type: "password",
      label: "Password",
      required: true,
      requiredMessage: "Password cannot be blank",
      validation: [{ type: "password", minLength: 15 }],
      placeholder: "Password",
      description:
        "Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.",
      ...styles,
    },
    {
      fieldId: "username",
      type: "text",
      label: "Username",
      required: true,
      requiredMessage: "Username cannot be blank",
      placeholder: "Username",
      description:
        "Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.",
      ...styles,
    },
    {
      fieldId: "country",
      type: "select",
      label: "Your Country/Region",
      required: true,
      requiredMessage: "Country cannot be blank", // has error
      options: [
        {
          value: "iran",
          label: "Iran",
        },
        {
          value: "us",
          label: "USA",
        },
        {
          value: "china",
          label: "China",
        },
      ],
      description:
        "For compliance reasons, we're required to collect country information to send you occasional updates and announcements.",
      ...styles,
    },
    {
      fieldId: "emailPreferences",
      type: "checkbox",
      label: "Email preferences",
      itemsClassName: "text-sm text-gray-700",
      options: [
        {
          label: "Receive occasional product updates and announcements",
          value: "1",
        },
      ],
      labelClassName: "block mb-1 text-[14px] font-normal text-gray-800",
    },
    {
      fieldId: "submitButton",
      type: "content",
      as: "div",
      content: <CustomButton>Create Account</CustomButton>,
    },
    {
      fieldId: "note",
      type: "content",
      content: ({ fieldId, values }) => {
        return (
          <div id={`${fieldId}-content`}>
            {/* <div>Field ID: {fieldId}</div>
            <div>Email: {values.email as string}</div> */}
            <p className="text-gray-500 text-xs leading-5">
              By creating an account, you agree to the
              <a
                href="https://github.com/site/terms"
                className="underline underline-offset-4 text-blue-600"
              >
                Terms of Service
              </a>
              . For more information about GitHub's privacy practices, see the
              <a
                href="https://github.com/site/terms"
                className="underline underline-offset-4 text-blue-600 ml-1"
              >
                GitHub Privacy Statement
              </a>
              . We'll occasionally send you account-related emails.
            </p>
          </div>
        );
      },
    },
  ],
};

const GithubSignupForm = () => {
  const handleSubmit = (value: unknown, isValid: boolean) => {
    console.log("Is form valid? ", isValid ? "Yes" : "No");
    console.log("Form Data:", value);
  };
  return (
    <div>
      <DynamicForm formData={githubSignupFormSchema} onSubmit={handleSubmit} />
    </div>
  );
};

export default GithubSignupForm;
