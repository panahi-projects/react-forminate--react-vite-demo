// import { DynamicForm } from "react-forminate";
// import { DynamicForm } from "react-forminate";
import {
  DynamicForm,
  FormDataCollectionType,
} from "../../../../react-forminate/src";

const formData: FormDataCollectionType = {
  formId: "simpleForm1",
  title: "Simple Form Example",
  fields: [
    {
      fieldId: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter your name",
    },
    {
      fieldId: "email",
      label: "Email",
      type: "text",
      required: true,
      placeholder: "Enter your email address",
      validation: [
        {
          pattern: "^\\S+@\\S+\\.\\S+$",
          message: "Invalid email format",
        },
      ],
    },
    {
      fieldId: "age",
      label: "Age",
      type: "number",
      placeholder: "Enter your age",
    },
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
  ],
};

const SampleForm = () => {
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };

  return <DynamicForm formData={formData} onSubmit={handleSubmit} />;
};

export default SampleForm;
