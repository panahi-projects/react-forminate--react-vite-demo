import {
  DynamicForm,
  FormDataCollectionType,
} from "../../../../react-forminate/src";

const UserRegisterForm = () => {
  const UserRegistrationForm: FormDataCollectionType = {
    formId: "userRegistration",
    options: {
      validateFieldsOnBlur: true,
    },
    fields: [
      {
        fieldId: "email",
        type: "email",
        label: "Email",
        required: true,
        validation: [
          {
            pattern: "^\\S+@\\S+\\.\\S+$",
            message: "Enter a valid email address",
          },
        ],
        labelClassName: "text-gray-100",
      },
      {
        fieldId: "password",
        type: "password",
        label: "Password",
        required: true,
        validation: [
          {
            type: "password",
          },
        ],
        labelClassName: "text-gray-100",
      },
      {
        fieldId: "age",
        type: "number",
        label: "Age",
        required: true,
        validation: [
          {
            min: 18,
            message: "You must be 18 or older",
          },
          {
            max: 120,
            message: "Enter a realistic age",
          },
        ],
        labelClassName: "text-gray-100",
      },
      {
        fieldId: "subscribe",
        type: "checkbox",
        required: true,
        itemsClassName: "text-gray-100",
        options: [
          {
            value: "yes",
            label: "Subscribe the newsletter",
          },
        ],
      },
    ],
  };
  return (
    <DynamicForm
      formId={UserRegistrationForm.formId}
      formData={UserRegistrationForm}
      onSubmit={(values, isValid) => {
        console.log("Submitting:", values, isValid);
      }}
    />
  );
};

const CustomValidation = () => {
  return <UserRegisterForm />;
};

export default CustomValidation;
