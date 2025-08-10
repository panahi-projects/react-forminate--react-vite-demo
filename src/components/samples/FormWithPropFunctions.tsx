import {
  DynamicForm,
  FormDataCollectionType,
  useFormValues,
  FormRegistryProvider,
  useFormReg,
} from "../../../../react-forminate/src";
// import { DynamicForm, FormDataCollectionType } from "react-forminate";

export const formDataWithPropsFunctions: FormDataCollectionType = {
  formId: "formWithPropFunctions",
  title: "Form With Prop Functions",
  description: "This form demonstrates various conditional field behaviors",
  options: {
    validateFieldsOnBlur: true,
    skeleton: {
      showSkeletonLoading: true,
    },
  },
  fields: [
    {
      fieldId: "baseInfo",
      type: "group",
      label: "Basic Information",
      className: "mb-4 p-4 bg-gray-50 rounded-lg border border-gray-300",
      labelClassName: "text-lg font-semibold mb-2",
      fields: [
        {
          fieldId: "rule",
          type: "text",
          label: "Rule",
          placeholder: "Enter a rule",
          className:
            "border border-gray-300 bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          labelClassName: "block mb-2 text-sm font-medium text-gray-900",
          required: true,
          _defaultValue: "Admin",
          autoCorrect: "off",
          autoComplete: "off",
        },
        {
          fieldId: "username",
          label: "Username",
          type: "text",
          validation: [
            {
              pattern: "^[a-zA-Z0-9_]{4,20}$",
              message: "4-20 chars: letters, numbers, or underscores only.",
            },
          ],
          className:
            "border border-gray-300 bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          labelClassName: "block mb-2 text-sm font-medium text-gray-900",
        },
        {
          fieldId: "type",
          label: "Type",
          type: "text",
          className:
            "border border-gray-300 bg-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          labelClassName: "block mb-2 text-sm font-medium text-gray-900",
        },
      ],
    },
    // Basic information section
    {
      fieldId: "firstName",
      label: {
        fn: ({ values }) => {
          if (typeof values?.rule === "string" && values?.rule.length > 0) {
            return `${values?.rule}'s First Name`;
          }
          return "First Name";
        },
        dependsOn: ["rule"],
      },
      type: "text",
      _defaultValue: "Saeed",
      required: true,
      placeholder: "Enter your first name",
      validation: [
        {
          pattern: "^[A-Za-z]+$",
          message: "Only alphabetic characters allowed",
        },
        {
          minLength: 2,
          maxLength: 50,
          message: "It must be longer than 2 and lower than 50 chars",
        },
      ],
      autoFocus: true,
      autoComplete: "off",
      visibility: true,
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    {
      fieldId: "lastName",
      label: {
        fn: ({ values }) => {
          return values?.firstName
            ? `${values?.firstName}'s Last Name`
            : "Last Name";
        },
        dependsOn: ["firstName"],
      },
      type: "text",
      required: true,
      placeholder: "Enter your last name",
      validation: [
        {
          minLength: 2,
        },
        {
          maxLength: 12,
          message: "Maximum char(s) must be 12",
        },
        {
          custom: (value) => {
            return value === "abc" ? false : true;
          },
          message: "Cannot filled with fake data",
        },
      ],
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
      events: {
        onCustomChange: (event, fieldId, values, fieldSchema, formSchema) => {
          console.log(`Field ${fieldId}'s event is:`, event);
          console.log(`Field ${fieldId}'s value is:`, values[fieldId]);
          console.log(`Field ${fieldId}'s schema is:`, fieldSchema);
          console.log(`Entire form schema is:`, formSchema);
        },
      },
      autoComplete: "off",
      visibility: {
        dependsOn: "firstName",
        condition: "equals",
        value: "Saeed",
      },
    },
    {
      fieldId: "email",
      label: "Email Address",
      type: "email",
      required: true,
      requiredMessage: {
        fn: ({ values }) => {
          return values?.lastName === "Panahi"
            ? "Email is required for Saeed"
            : "Email is required";
        },
        dependsOn: ["lastName"],
      },
      placeholder: "your.email@example.com",
      validation: [
        {
          pattern: "^\\S+@\\S+\\.\\S+$",
          message: "Please enter a valid email address",
        },
      ],
      visibility: true,
      autoComplete: "off",
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
      disabled: {
        fn: ({ values }) => {
          return values?.firstName === "Saeed" ? true : false;
        },
        dependsOn: ["firstName"],
      },
      autoCapitalize: "none",
      inputMode: "email",
    },
    {
      fieldId: "phone",
      label: "Phone number",
      type: "tel",
      placeholder: "+989179998877",
      validation: [
        {
          pattern: "^\\+?[0-9\\s-]{6,}$",
          message: "Enter a valid phone number (e.g., +1234567890).",
        },
      ],
      autoComplete: "off",
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    // Conditional section - Employment status
    {
      fieldId: "gender",
      label: "Gender",
      type: "radio",
      required: true,
      options: [
        {
          value: "male",
          label: "Male",
        },
        {
          value: "female",
          label: "Female",
        },
      ],
      validation: [
        {
          pattern: "^(?!Male$).+",
          message: "Male should not be selected",
        },
      ],
    },
    {
      fieldId: "employmentStatus",
      label: "Employment Status",
      type: "radio",
      options: [
        { value: "employed", label: "Employed" },
        { value: "unemployed", label: "Unemployed" },
        { value: "student", label: "Student" },
      ],
    },

    // Only show if employed
    {
      fieldId: "jobTitle",
      label: "Job Title",
      type: "text",
      placeholder: "Your current job position",
      required: true,
      visibility: {
        dependsOn: ["employmentStatus"],
        condition: "equals",
        value: "employed",
      },
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    {
      fieldId: "companyName",
      label: "Company Name",
      type: "text",
      placeholder: "Your employer's name",
      required: {
        fn: ({ values }) => {
          return values.employmentStatus === "employed";
        },
        dependsOn: ["employmentStatus"],
      },
      visibility: {
        fn: ({ values }) => {
          return values.employmentStatus === "employed";
        },
        dependsOn: ["employmentStatus"],
      },
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },

    // Only show if student
    {
      fieldId: "university",
      label: "University/School",
      type: "text",
      placeholder: "Name of your educational institution",
      required: {
        fn: ({ values }) => {
          return values.employmentStatus === "student";
        },
        dependsOn: ["employmentStatus"],
      },
      visibility: {
        fn: ({ values }) => {
          return values.employmentStatus === "student";
        },
        dependsOn: ["employmentStatus"],
      },
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    {
      fieldId: "degree",
      label: {
        fn: ({}) => {
          return "Degree:";
        },
        // dependsOn: [], //All fields are its dependencies if dependsOn is empty (But if it is not provided at all, it will not be considered as a dependency)
      },
      type: "select",
      required: true,
      options: ["Diploma", "Bachelor", "Master", "PhD"],
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    {
      fieldId: "languages",
      type: "checkbox",
      label: "Languages",
      required: true,
      requiredMessage: "An item must be selected",
      // layout: "inline",
      options: [
        {
          value: "persian",
          label: "Persian",
        },
        {
          value: "english",
          label: "English",
        },
        {
          value: "germany",
          label: "Germany",
        },
        {
          value: "spanish",
          label: "Spanish",
        },
        {
          value: "arabic",
          label: "Arabic",
        },
        {
          value: "chinese",
          label: "Chinese",
        },
      ],
      _defaultValue: ["persian", "chinese"],
      events: {
        onCustomChange: (e, fieldId, values, fieldSchema, formSchema) => {
          console.log("Event: ", e);
          console.log("Field Id: ", fieldId);
          console.log("Field Value: ", values[fieldId]);
          console.log("Field Schema: ", fieldSchema);
          console.log("Form Schema: ", formSchema);
        },
      },
      labelStyles: {
        marginBottom: "8px",
      },
    },
    {
      fieldId: "album",
      label: "Album",
      type: "select",
      dynamicOptions: {
        endpoint: "https://jsonplaceholder.typicode.com/albums",
        transformResponse: (res) =>
          res.map((item: { title: string; id: string }) => ({
            label: item.title,
            value: item.id,
          })),
        fetchOnInit: true,
      },
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
      _defaultValue: "3",
      events: {
        onCustomChange: (e, fieldId, values, fieldSchema, formSchema) => {
          console.log("Event: ", e);
          console.log("Field Id: ", fieldId);
          console.log("Field Value: ", values[fieldId]);
          console.log("Field Schema: ", fieldSchema);
          console.log("Form Schema: ", formSchema);
        },
      },
    },
    // Age with validation
    {
      fieldId: "age",
      label: "Age",
      type: "number",
      placeholder: "Enter your age",
      validation: [
        {
          min: 18,
          max: 60,
          message: "Must be between 18 and 60",
        },
      ],
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },

    // Subscription preferences
    {
      fieldId: "subscribeNewsletter",
      label: "Subscribe to newsletter?",
      type: "radio",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
      _defaultValue: "no",
    },

    // Only show if subscribed to newsletter
    {
      fieldId: "newsletterFrequency",
      label: "Newsletter Frequency",
      type: "select",
      options: [
        { value: "weekly", label: "Weekly" },
        { value: "monthly", label: "Monthly" },
        { value: "quarterly", label: "Quarterly" },
      ],
      required: true,
      _defaultValue: "monthly",
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },

    // Address section
    {
      fieldId: "address",
      label: "Street Address",
      type: "textarea",
      required: false,
      placeholder: "123 Main St",
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    {
      fieldId: "country",
      label: "Country",
      type: "select",
      required: true,
      options: [
        { value: "ir", label: "Iran" },
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "uk", label: "United Kingdom" },
        { value: "au", label: "Australia" },
        { value: "other", label: "Other" },
      ],
      _defaultValue: "ca",
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },

    // Only show if country is US
    {
      fieldId: "state",
      label: "State",
      type: "select",
      options: [
        { value: "ca", label: "California" },
        { value: "ny", label: "New York" },
        { value: "tx", label: "Texas" },
        // ... more states
      ],
      required: true,
      visibility: {
        condition: "equals",
        dependsOn: ["country"],
        value: "us",
      },
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },

    // Only show if country is Canada
    {
      fieldId: "province",
      label: "Province",
      type: "select",
      options: [
        { value: "on", label: "Ontario" },
        { value: "qc", label: "Quebec" },
        { value: "bc", label: "British Columbia" },
        // ... more provinces
      ],
      required: true,
      visibility: {
        condition: "equals",
        dependsOn: ["country"],
        value: "ca",
      },
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },

    // Conditional agreement based on age
    {
      fieldId: "parentalConsent",
      label: "Parental Consent (for users under 21)",
      type: "checkbox",
      visibility: {
        fn: ({ values }) => {
          if (values.age && typeof values.age === "number" && values.age < 21) {
            return true;
          }
          return false;
        },
        dependsOn: ["age"],
      },
      description: "I confirm that I have parental consent to use this service",
    },

    // // File upload example
    {
      fieldId: "profilePhoto",
      label: "Profile Photo",
      type: "file",
      multiple: true,
      accept: "image/*",
      description: "Upload a JPEG or PNG image (max 5MB)",
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
      events: {
        onCustomUpload: (files, fieldId) => {
          console.log("Files uploaded:", files, "for field:", fieldId);
          // files will be File[] array
        },
        onCustomRemove: (file, fieldId) => {
          console.log("File removed:", file, "from field:", fieldId);
        },
      },
      storageFormat: "base64",
      maxSizeMB: 0.1,
    },

    // Terms and conditions
    {
      fieldId: "acceptTerms",
      label: "Terms and Conditions",
      type: "checkbox",
      required: true,
      description: "I agree to the terms and conditions and privacy policy",
      singlePositiveAnswerValue: "Yes",
      singleNegativeAnswerValue: "No",
    },
  ],
};

const FormWithPropFunctions = () => {
  // const val = useFormValues(formData.formId);
  const onSubmit = (values: unknown, isValid: boolean) => {
    console.log(values, isValid);
    // console.log(formData.formId + " values: ", val);
  };

  return (
    <div>
      <DynamicForm formData={formDataWithPropsFunctions} onSubmit={onSubmit} />
    </div>
  );
};

export default FormWithPropFunctions;
