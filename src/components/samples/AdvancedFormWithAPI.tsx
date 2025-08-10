import {
  DynamicForm,
  FormDataCollectionType,
} from "../../../../react-forminate/src";
// import { DynamicForm, FormDataCollectionType } from "react-forminate";

const formData: FormDataCollectionType = {
  formId: "ApiDrivenFormData",
  title: "API Driven Form Example",
  fields: [
    {
      fieldId: "group1",
      label: "Photo Album",
      type: "group",
      className: "p-4 border-2 border-gray-300 rounded-lg",
      legendClassName: "block text-sm font-medium text-gray-200 px-2",
      fields: [
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
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          labelClassName: "block mb-2 text-sm font-medium text-gray-900",
        },
        {
          fieldId: "photo",
          label: "Photo",
          type: "select",
          dynamicOptions: {
            dependsOn: ["album"],
            endpoint: "https://jsonplaceholder.typicode.com/photos",
            params: { albumId: "album" },
            transformResponse: (res) =>
              res.map((item: { title: string; id: string }) => ({
                label: item.title,
                value: item.id,
              })),
          },
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          labelClassName: "block mb-2 text-sm font-medium text-gray-900",
        },
      ],
    },
  ],
};
const AdvancedGroupAndAPIForm = () => {
  return (
    <DynamicForm
      formData={formData}
      onSubmit={(value, valid) => console.log(value, valid)}
    />
  );
};

export default AdvancedGroupAndAPIForm;
