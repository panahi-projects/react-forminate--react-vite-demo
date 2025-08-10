// import { DynamicForm, type FormDataCollectionType } from "react-forminate";
import {
  DynamicForm,
  FormDataCollectionType,
  useFormActions,
  useFormErrors,
  useFormValues,
} from "../../../../react-forminate/src";
let counter = 0;
const NewForm = () => {
  counter++;
  const formData: FormDataCollectionType = {
    formId: "newForm1",
    options: {
      submit: {
        visibility: false,
      },
    },
    fields: [
      {
        fieldId: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Enter your name",
        className:
          "bg-neutral-800! outline-0 border-[1px]! border-neutral-950! text-neutral-200!",
        labelClassName: "text-gray-400",
        errorClassName: "text-pink-500! text-xs!",
      },
      {
        fieldId: "email",
        label: "Email",
        type: "text",
        required: true,
        placeholder: "Enter your email address",
        className:
          "bg-neutral-800! outline-0 border-[1px]! border-neutral-950! text-neutral-200!",
        labelClassName: "text-gray-400",
        validation: [
          {
            pattern: "^\\S+@\\S+\\.\\S+$",
            message: "Invalid email format",
          },
        ],
        errorStyles: {
          color: "#ff0",
        },
      },
      {
        fieldId: "iban",
        type: "text",
        label: "IBAN",
        required: true,
        placeholder: "Enter IBAN",
        className:
          "bg-neutral-800! outline-0 border-[1px]! border-neutral-950! text-neutral-200!",
        labelClassName: "text-gray-400",
        validation: [
          {
            type: "IBAN",
          },
        ],
        description: "Enter your International Bank Account Number",
        descriptionClassName: "text-blue-300!",
        descriptionStyles: {
          fontSize: "9px",
        },
      },
    ],
  };
  const values = useFormValues("newForm1");
  const { validateForm } = useFormActions("newForm1");
  const formErrors = useFormErrors("newForm1");

  const handleSubmit = async () => {
    const isValid = await validateForm(formData);
    console.log("Is form valid:", isValid);
    console.log("formErrors: ", formErrors);
    if (isValid) {
      console.log("values:", values);
    }
  };
  return (
    <div>
      <div className="text-white mb-8">counter: {counter}</div>
      <DynamicForm formData={formData} />
      <button
        onClick={handleSubmit}
        className="bg-emerald-600 text-white py-2 px-4 hover:bg-emerald-700 active:bg-emerald-800 transition-all mt-2 float-end"
      >
        Submit Form
      </button>
    </div>
  );
};

export default NewForm;
