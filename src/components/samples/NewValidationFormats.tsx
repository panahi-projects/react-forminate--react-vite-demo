import {
  DynamicForm,
  FormDataCollectionType,
} from "../../../../react-forminate/src";
// import { DynamicForm, FormDataCollectionType } from "react-forminate";

const SignupForm = () => {
  const commonStyling = {
    disableDefaultStyling: true,
    containerClassName: "space-y-2",
    className:
      "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
    labelClassName: "block text-sm font-medium text-gray-700 mb-2",
  };
  const formData: FormDataCollectionType = {
    formId: "signupForm",
    title: "Signup Form",
    options: {
      validateFieldsOnBlur: true,
    },
    fields: [
      {
        fieldId: "firstName",
        type: "text",
        label: "First Name",
        required: true,
        validation: [
          {
            maxLength: 15,
            message: "Must be 15 characters or less",
          },
        ],
        ...commonStyling,
      },
      {
        fieldId: "lastName",
        type: "text",
        label: "Last Name",
        required: true,
        validation: [
          {
            maxLength: 20,
            message: "Must be 20 characters or less",
          },
        ],
        ...commonStyling,
      },
      {
        fieldId: "email",
        type: "email",
        label: "Email Address",
        required: true,
        validation: [{ type: "email", message: "Invalid email address" }],
        ...commonStyling,
      },
      {
        fieldId: "password",
        type: "password",
        label: "Password",
        required: true,
        validation: [{ type: "password" }],
        ...commonStyling,
      },
      {
        fieldId: "confirmPassword",
        type: "password",
        label: "Confirm Password",
        required: true,
        validation: [
          {
            type: "equalTo",
            equalTo: "{{password}}", // Reference to the password field
            message: "Passwords must match", // Custom error message
          },
        ],
        ...commonStyling,
      },
      // Example: Disable special character requirement
      // {
      //   type: "password",
      //   requireSpecialChar: false
      // }

      // Example: Change minimum length to 10
      // {
      //   type: "password",
      //   minLength: 10
      // }

      // Example: Only require length and numbers
      // {
      //   type: "password",
      //   requireUpperCase: false,
      //   requireLowerCase: false,
      //   requireSpecialChar: false
      // }
      {
        fieldId: "website",
        type: "text",
        label: "Website",
        required: true,
        validation: [
          //! Basic URL Validation (all formats):
          // { type: "url" },
          // Accepts:
          // - "https://example.com"
          // - "http://example.com"
          // - "//example.com"
          // - "/relative/path"
          // - "192.168.1.1"
          // - "192.168.1.1:8080"
          //----------------
          //! Require Absolute URLs:
          {
            type: "url",
            requireAbsolute: true,
            message: "Please enter a complete URL with protocol",
          },
          // Accepts:
          // - "https://example.com"
          // - "http://example.com"
          // - "//example.com"
          // Rejects:
          // - "/relative/path"
          // ----------------
          //! Require HTTPS:
          /*{
            type: "url",
            requireHttps: true,
            message: "Secure HTTPS URL is required",
          },*/
          // Accepts:
          // - "https://example.com"
          // Rejects:
          // - "http://example.com"
          // - "//example.com"
          // --------------
          //! Disallow Relative Paths:
          /*{
            type: "url",
            allowRelative: false,
          },*/
          // Accepts:
          // - "https://example.com"
          // - "192.168.1.1"
          // Rejects:
          // - "/relative/path"
          // - "../another/path"
          // --------------
          //! IP Address Validation:
          /* {
            type: "url",
            validateAs: "ip",
          },*/
          // Accepts:
          // - "192.168.1.1"
          // Rejects:
          // - "192.168.1.1:8080"
          // - "example.com"
          // --------------
          //! IP:Port Validation:
          /* {
            type: "url",
            validateAs: "ipPort",
          },*/
          // Accepts:
          // - "192.168.1.1:8080"
          // - "192.168.1.1"
          // Rejects:
          // - "example.com:8080"
        ],
        ...commonStyling,
      },
    ],
  };

  const onSubmit = (value: any, isValid: boolean) => {
    console.log("value", value);

    if (isValid) {
      console.log("value", value, " is valid: ", isValid);
      // alert(JSON.stringify(value, null, 2));
    }
  };

  return <DynamicForm formData={formData} onSubmit={onSubmit} />;
};

const NewValidationFormats = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default NewValidationFormats;
