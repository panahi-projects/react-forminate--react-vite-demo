import {
  DynamicForm,
  FormDataCollectionType,
  registerField,
  useField,
} from "react-forminate";

import { ChromePicker } from "react-color";

const CustomColorPicker = (props: any) => {
  const { fieldId, eventHandlers, fieldParams, setValue, values } =
    useField(props);

  const handleColorChange = (color: any) => {
    setValue(fieldId, color.hex);
    if (props.events?.onCustomChange) {
      props.events.onCustomChange({ target: { value: color.hex } }, fieldId, {
        ...fieldParams.values,
        [fieldId]: color.hex,
      });
    }
  };

  return (
    <div className="color-picker-container">
      <ChromePicker
        color={(values[fieldId] as string) || "#ffffff"}
        onChangeComplete={handleColorChange}
        disableAlpha={props.params.disableAlpha || true}
      />
      <input
        type="hidden"
        {...fieldParams}
        {...eventHandlers.htmlHandlers}
        value={(values[fieldId] as string) || ""}
      />
    </div>
  );
};
registerField("colorPicker", CustomColorPicker);

const formData: FormDataCollectionType = {
  formId: "SimpleForm",
  title: "Simple Form Example",
  fields: [
    {
      fieldId: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter your name",
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    {
      fieldId: "email",
      label: "Email",
      type: "text",
      required: true,
      placeholder: "Enter your email",
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    {
      fieldId: "dob",
      label: "Date of Birth",
      type: "date",
      className:
        "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    {
      fieldId: "primaryColor",
      type: "colorPicker",
      label: "Primary Brand Color",
      params: {
        disableAlpha: true,
      },
      events: {
        onCustomChange: (e, fieldId, values) => {
          console.log("Color changed:", values[fieldId]);
        },
      },
    },
  ],
};

const CustomFieldRegister = () => {
  const handleSubmit = (values: any, isValid: boolean) => {
    console.log("Form Data:", values, "Is Valid:", isValid);
  };
  return <DynamicForm formData={formData} onSubmit={handleSubmit} />;
};

export default CustomFieldRegister;
