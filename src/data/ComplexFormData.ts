import { FormDataCollectionType } from "../../../react-forminate/src";

const radioStyles: Record<string, React.CSSProperties> = {
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

const FormData: FormDataCollectionType = {
  formId: "ComplexFormData",
  title: "Complex Form Example",
  fields: [
    {
      fieldId: "personal_info",
      label: "Personal Information",
      type: "group",
      fields: [
        {
          fieldId: "first_name",
          label: "First Name",
          type: "text",
          required: true,
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        },
        {
          fieldId: "last_name",
          label: "Last Name",
          type: "text",
          required: true,
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        },
        {
          fieldId: "dob",
          label: "Date of Birth",
          type: "date",
          required: true,
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        },
      ],
    },
    {
      fieldId: "address",
      label: "Address",
      type: "group",
      fields: [
        {
          fieldId: "country",
          label: "Country",
          type: "select",
          options: ["USA", "Canada", "Germany", "France"],
          required: true,
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        },
        {
          fieldId: "state",
          label: "State",
          type: "select",
          required: false,
          dynamicOptions: {
            dependsOn: "country",
            endpoint: "/api/getStates",
            method: "GET",
          },
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        },
        {
          fieldId: "city",
          label: "City",
          type: "text",
          required: true,
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        },
      ],
    },
    {
      fieldId: "health_info",
      label: "Health Information",
      type: "group",
      fields: [
        {
          fieldId: "smoker",
          label: "Do you smoke?",
          type: "radio",
          options: ["Yes", "No"],
          required: true,
          ...radioStyles,
        },
        {
          fieldId: "smoking_frequency",
          label: "How often do you smoke?",
          type: "select",
          options: ["Occasionally", "Daily", "Heavy"],
          required: true,
          visibility: {
            dependsOn: "smoker",
            condition: "equals",
            value: "Yes",
          },
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        },

        {
          fieldId: "home_owner",
          label: "Are you the homeowner?",
          type: "radio",
          options: ["Yes", "No"],
          required: true,
          ...radioStyles,
        },
        {
          fieldId: "property_type",
          label: "Property Type",
          type: "select",
          options: ["House", "Apartment", "Condo"],
          required: true,
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          events: {
            onCustomChange: (e, fieldId, values, field, formSchema) => {
              const value = e.target.value;
              console.log("Target value:", value);

              console.log("Field ID:", fieldId);
              console.log("All values:", values);
              console.log("Field value:", values[fieldId]);
              console.log("Field:", field);
              console.log("Form schema:", formSchema);
              // const home_address = formSchema?.fields.find(
              //   (field) => field.fieldId === "home_address"
              // );
              // if (home_address) home_address.visibility = false;
            },
          },
        },
        {
          fieldId: "home_value",
          label: "Estimated Home Value (USD)",
          type: "number",
          required: true,
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          validation: [
            {
              min: 50000,
              max: 5000000,
            },
          ],
        },
        {
          fieldId: "has_security_system",
          label: "Do you have a home security system?",
          type: "radio",
          options: ["Yes", "No"],
          required: true,
          ...radioStyles,
        },
        {
          fieldId: "security_system_type",
          label: "Security System Type",
          type: "select",
          options: ["Monitored", "Unmonitored", "Smart Home System"],
          required: true,
          visibility: {
            dependsOn: "has_security_system",
            condition: "equals",
            value: "Yes",
          },
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        },
        {
          fieldId: "fire_safety",
          label: "Do you have fire safety measures?",
          type: "checkbox",
          options: [
            "Smoke Detectors",
            "Fire Extinguishers",
            "Sprinkler System",
          ],
          required: true,
          ...radioStyles,
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
        },
        {
          fieldId: "home_address",
          label: "Home Address",
          type: "group",
          fields: [
            {
              fieldId: "street",
              label: "Street Address",
              type: "text",
              required: true,
              className:
                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              labelClassName:
                "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            },
            {
              fieldId: "city",
              label: "City",
              type: "text",
              required: true,
              className:
                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              labelClassName:
                "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            },
            {
              fieldId: "state",
              label: "State",
              type: "select",
              required: false,
              dynamicOptions: {
                dependsOn: "country",
                endpoint: "/api/getStates",
                method: "GET",
              },
              className:
                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              labelClassName:
                "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            },
            {
              fieldId: "zip_code",
              label: "ZIP Code",
              type: "text",
              required: true,
              validation: [
                {
                  pattern: "^[0-9]{5}$",
                },
              ],
              className:
                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              labelClassName:
                "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
            },
          ],
        },
        {
          fieldId: "insurance_coverage",
          label: "Coverage Type",
          type: "select",
          options: ["Basic", "Comprehensive", "Premium"],
          required: true,
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          labelClassName:
            "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        },
      ],
    },
  ],
};

export default FormData;
