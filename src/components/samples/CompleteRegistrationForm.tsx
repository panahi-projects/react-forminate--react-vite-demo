import {
  DynamicForm,
  FormDataCollectionType,
} from "../../../../react-forminate/src";
import "./CompleteRegisterationForm.css";

// import { DynamicForm, FormDataCollectionType } from "react-forminate";
const inputStyle: React.CSSProperties = {
  backgroundColor: "gold",
  borderRadius: "24px",
};

const checkUsernameAvailability = (username: string): Promise<boolean> => {
  console.log("Checking username availability...");

  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate server response
      const isAvailable = !["admin", "user", "test"].includes(
        username.toLowerCase()
      );
      console.log(`Username "${username}" available: ${isAvailable}`);
      resolve(isAvailable);
    }, 1000);
  });
};

const UserRegistrationForm: FormDataCollectionType = {
  formId: "userRegistration",
  title: "Complete User Registration",
  description: "Join our platform in just a few steps",
  options: {
    validateFieldsOnBlur: true, // Validate fields when they lose focus
    // submitButton: {
    //   text: "Create Account",
    //   className: "bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
    // }
  },
  // ===== SECTION 1: BASIC INFORMATION =====
  fields: [
    {
      fieldId: "basicInfoSection",
      type: "group",
      label: "Basic Information",
      className: "mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200",
      legendClassName: "text-xl font-bold text-gray-800 mb-4 px-4",
      fields: [
        {
          fieldId: "avatar",
          type: "file",
          label: "Profile Picture",
          accept: "image/*",
          multiple: false,
          description: "JPEG or PNG, max 2MB",
          storageFormat: "base64",
          events: {
            onCustomUpload: (files) => {
              console.log("Uploading profile photo:", files[0].name);
              // Add your upload logic here
            },
          },
          className:
            "file:border file:border-gray-300 file:rounded file:px-4 file:py-2",
        },
        {
          fieldId: "username",
          type: "text",
          label: "Username",
          required: true,
          placeholder: "cooluser123",
          validation: [
            {
              pattern: "^[a-zA-Z0-9_]{4,20}$",
              message: "4-20 characters (letters, numbers, underscores)",
            },
            {
              custom: async (value) => {
                // This will now return a Promise<boolean>
                return await checkUsernameAvailability(value as string);
              },
              message: "Username already taken",
            },
          ],
          className: "my-input",
          disableDefaultStyling: true, //If you want to set your own CSS classes set this prop: true. Default value: false
          labelClassName: "block mb-1 font-medium text-sm text-slate-600",
        },
        {
          fieldId: "email",
          type: "email",
          label: "Email Address",
          required: true,
          placeholder: "you@example.com",
          validation: [
            {
              pattern: "^\\S+@\\S+\\.\\S+$",
              message: "Please enter a valid email",
            },
          ],
          autoComplete: "email",
          style: {
            ...inputStyle,
          },
        },
        {
          fieldId: "password",
          type: "password",
          label: "Password",
          required: true,
          validation: [
            { minLength: 8, message: "Minimum 8 characters" },
            {
              pattern: "^(?=.*[A-Z])(?=.*[0-9]).*$",
              message: "Requires 1 number and 1 uppercase letter",
            },
          ],
          className: "border border-gray-300 rounded-lg px-4 py-2 w-full",
        },
      ],
    },

    // ===== SECTION 2: PERSONAL DETAILS =====
    {
      fieldId: "personalDetailsSection",
      type: "group",
      label: "Personal Details",
      className: "mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200",
      fields: [
        {
          fieldId: "fullName",
          type: "container",
          columns: 2,
          gap: 16,
          fields: [
            {
              fieldId: "firstName",
              type: "text",
              label: "First Name",
              required: true,
              className: "border border-gray-300 rounded-lg px-4 py-2 w-full",
            },
            {
              fieldId: "lastName",
              type: "text",
              label: "Last Name",
              required: true,
              className: "border border-gray-300 rounded-lg px-4 py-2 w-full",
            },
          ],
        },
        {
          fieldId: "birthDate",
          type: "date",
          label: "Date of Birth",
          required: true,
          validation: [
            // {
            //   maxDate: new Date().toISOString().split("T")[0],
            //   message: "Must be in the past",
            // },
            {
              minDate: "1990-01-01",
              message: "Must be after 1900",
            },
          ],
          className: "border border-gray-300 rounded-lg px-4 py-2 w-full",
        },
        {
          fieldId: "gender",
          type: "radio",
          label: "Gender",
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
            { value: "preferNotToSay", label: "Prefer not to say" },
          ],
          required: true,
          validation: [
            {
              pattern: "^(?!preferNotToSay$).+",
            },
          ],
          className: "flex gap-4",
          // layout: "column",
          disableDefaultStyling: true,
        },
      ],
    },

    // ===== SECTION 3: CONTACT INFORMATION =====
    {
      fieldId: "contactInfoSection",
      type: "group",
      label: "Contact Information",
      className: "mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200",
      fields: [
        {
          fieldId: "phone",
          type: "tel",
          label: "Phone Number",
          placeholder: "+1 (123) 456-7890",
          validation: [
            {
              pattern: "^\\+?[0-9\\s-]{6,}$",
              message: "Enter a valid phone number",
            },
          ],
          className: "border border-gray-300 rounded-lg px-4 py-2 w-full",
        },
        {
          fieldId: "address",
          type: "container",
          fields: [
            {
              fieldId: "street",
              type: "textarea",
              label: "Full Address",
              required: true,
              className: "border border-gray-300 rounded-lg px-4 py-2 w-full",
              rows: 3,
            },
            {
              fieldId: "city",
              type: "text",
              label: "City",
              required: true,
              className: "border border-gray-300 rounded-lg px-4 py-2 w-full",
            },
            {
              fieldId: "country",
              type: "select",
              label: "Country",
              // required: true,
              dynamicOptions: {
                endpoint: "https://restcountries.com/v3.1/all",
                transformResponse: (res) =>
                  res.map((country: any) => ({
                    label: country.name.common,
                    value: country.cca2,
                  })),
                fetchOnInit: true,
              },
              className: "border border-gray-300 rounded-lg px-4 py-2 w-full",
              // disableDefaultStyling: true,
            },
            {
              fieldId: "state",
              type: "select",
              label: {
                fn: ({ values }) =>
                  values.country === "US"
                    ? "State"
                    : values.country === "CA"
                      ? "Province"
                      : "Region",
                dependsOn: ["country"],
              },
              required: true,
              visibility: {
                fn: ({ values }) => {
                  if (values.country && typeof values.country === "string") {
                    return ["US", "CA", "GB", "AU"].includes(values.country);
                  }
                  return false;
                },
                dependsOn: ["country"],
              },
              dynamicOptions: {
                dependsOn: "country",
                endpoint: "https://api.example.com/states/{{country}}",
                transformResponse: (res) =>
                  res.map((region: any) => ({
                    label: region.name,
                    value: region.code,
                  })),
              },
              className: "border border-gray-300 rounded-lg px-4 py-2 w-full",
            },
            {
              fieldId: "zipCode",
              type: "text",
              label: {
                fn: ({ values }) =>
                  values.country === "US"
                    ? "ZIP Code"
                    : values.country === "CA"
                      ? "Postal Code"
                      : "Postal Code",
                dependsOn: ["country"],
              },
              required: true,
              className: "border border-gray-300 rounded-lg px-4 py-2 w-full",
            },
          ],
        },
      ],
    },

    // ===== SECTION 4: PREFERENCES =====
    {
      fieldId: "preferencesSection",
      type: "group",
      label: "Preferences",
      className: "mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200",
      fields: [
        {
          fieldId: "communicationPrefs",
          type: "checkbox",
          label: "Communication Preferences",
          options: [
            { value: "email", label: "Email newsletters" },
            { value: "sms", label: "Text messages" },
            { value: "push", label: "Push notifications" },
          ],
          _defaultValue: ["email"],
          className: "space-y-2",
          required: true,
          validation: [
            {
              minItems: 2,
              message: "At least 2 items should be selected",
            },
          ],
        },
        {
          fieldId: "theme",
          type: "radio",
          label: "Theme Preference",
          options: [
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
            { value: "system", label: "Use system setting" },
          ],
          _defaultValue: "system",
          className: "flex gap-4",
        },
        {
          fieldId: "interests",
          type: "gridview",
          label: "Topics of Interest (Select up to 5)",
          dynamicOptions: {
            endpoint: "https://api.example.com/interests",
            transformResponse: (res) =>
              res.map((interest: any) => ({
                label: interest.name,
                value: interest.id,
                icon: interest.icon,
              })),
            fetchOnInit: true,
          },
          validation: [{ maxItems: 5, message: "Select up to 5 interests" }],
          className: "grid grid-cols-2 md:grid-cols-4 gap-4",
        },
      ],
    },

    // ===== SECTION 5: TERMS & SUBMISSION =====
    {
      fieldId: "termsSection",
      type: "group",
      className: "mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200",
      fields: [
        {
          fieldId: "termsAgreement",
          type: "checkbox",
          label: "I agree to the Terms of Service and Privacy Policy",
          required: true,
          requiredMessage: "You must accept the terms to continue",
          // description: (
          //   <span>
          //     Read our{" "}
          //     <a href="/terms" className="text-blue-600 hover:underline">
          //       Terms
          //     </a>{" "}
          //     and{" "}
          //     <a href="/privacy" className="text-blue-600 hover:underline">
          //       Privacy Policy
          //     </a>
          //   </span>
          // ),
          className: "flex items-start",
        },
        {
          fieldId: "marketingOptIn",
          type: "checkbox",
          label: "I want to receive marketing communications",
          className: "flex items-start",
        },
        {
          fieldId: "ageVerification",
          type: "checkbox",
          label: "I confirm I am at least 18 years old",
          required: true,
          visibility: {
            fn: ({ values }) => {
              if (!values.birthDate) return false;
              const birthYear = new Date(
                values.birthDate as string
              ).getFullYear();
              return new Date().getFullYear() - birthYear < 18;
            },
            dependsOn: ["birthDate"],
          },
          className: "flex items-start",
        },
      ],
    },
  ],
};

export const CompleteRegistrationForm = () => {
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form is valid? ", isValid);
    console.log("Form values: ", values);

    if (isValid) {
      console.log("Form submitted:", values);
      // Add your form submission logic here
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Create Your Account
      </h1>
      <DynamicForm formData={UserRegistrationForm} onSubmit={handleSubmit} />
    </div>
  );
};
