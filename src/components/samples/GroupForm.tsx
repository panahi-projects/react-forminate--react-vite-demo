import {
  DynamicForm,
  FormDataCollectionType,
} from "../../../../react-forminate/src";

const formSchema: FormDataCollectionType = {
  formId: "groupForm",
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
  ],
};
const GroupForm = () => {
  return (
    <div>
      <DynamicForm
        formData={formSchema}
        onSubmit={(values: any, isValid: boolean) =>
          console.log("IsValid: ", isValid, " --Values--", values)
        }
      />
    </div>
  );
};

export default GroupForm;
