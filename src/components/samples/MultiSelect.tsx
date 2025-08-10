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
      className:
        "bg-neutral-800! outline-0 border-[1px]! border-neutral-950! text-neutral-200!",
      labelClassName: "text-gray-400",
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
    },
    // {
    //   fieldId: "name",
    //   label: "Name",
    //   type: "text",
    //   required: true,
    //   placeholder: "Enter your name",
    // },
    // {
    //   fieldId: "email",
    //   label: "Email",
    //   type: "text",
    //   required: true,
    //   placeholder: "Enter your email address",
    //   validation: [
    //     {
    //       pattern: "^\\S+@\\S+\\.\\S+$",
    //       message: "Invalid email format",
    //     },
    //   ],
    // },
    {
      fieldId: "age",
      label: "Age",
      type: "number",
      placeholder: "Enter your age",
    },
    {
      fieldId: "language",
      label: "Language",
      type: "multiSelect",
      debounceSearch: 600,
      showClearAll: false,
      required: true,
      validateOnChange: true,
      validation: [
        {
          minItems: 2,
          message: "At least 2 items should be selected",
        },
      ],
      events: {
        onCustomChangeItems: (e) => {
          console.log("Multi-Select Changed", e);
        },
        onCustomSearch: (items, selectedItems, id, term) => {
          console.log("Multi-Select items", items);
          console.log("Multi-Select selectedItems", selectedItems);
          console.log("Multi-Select id", id);
          console.log("Multi-Select term", term);
        },
      },
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
          value: "russian",
          label: "Russian",
        },
        {
          value: "spanish",
          label: "Spanish",
        },
      ],
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

const MultiSelect = () => {
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return <DynamicForm formData={formData} onSubmit={handleSubmit} />;
};

export default MultiSelect;
