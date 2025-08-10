import {
  DynamicForm,
  FormDataCollectionType,
} from "../../../../react-forminate/src";

interface CustomSubmitProps {
  children: React.ReactNode;
}
const CustomSubmit = ({ children }: CustomSubmitProps) => {
  const onSubmit = () => {
    console.log("Submitted");
  };
  return (
    <div className="flex justify-end mt-8">
      <button
        onClick={onSubmit}
        className="py-2 px-8 bg-emerald-400 hover:bg-emerald-500 transition text-gray-50 cursor-pointer"
      >
        {children}
      </button>
    </div>
  );
};

const FormData: FormDataCollectionType = {
  formId: "customSubmit2",
  title: "Simple Form Example",
  options: {
    submit: {
      component: <CustomSubmit>Submit Button</CustomSubmit>,
    },
  },
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
    },

    {
      fieldId: "email",
      label: "Email",
      type: "text",
      required: true,
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
      placeholder: "Enter your email",
    },
    {
      fieldId: "level",
      label: "Level",
      type: "select",
      options: ["Low", "Medium", "High"],
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    {
      fieldId: "dob",
      label: "Date of Birth",
      type: "date",
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
  ],
};

const CustomSubmit2 = () => {
  const onSubmit = (value: any, isValid: boolean) => {
    console.log("value", value);

    if (isValid) {
      alert(JSON.stringify(value, null, 2));
    }
  };
  return (
    <div>
      <h1>Custom Submit 2</h1>
      <DynamicForm formData={FormData} onSubmit={onSubmit} />
    </div>
  );
};

export default CustomSubmit2;
