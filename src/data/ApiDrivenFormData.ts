// import { FormDataCollectionType } from "react-forminate";
import { FormDataCollectionType } from "../../../react-forminate/src";

const FormData: FormDataCollectionType = {
  formId: "ApiDrivenFormData",
  title: "API Driven Form Example",
  baseUrl: "https://jsonplaceholder.typicode.com",
  fields: [
    {
      fieldId: "album",
      label: "Album",
      type: "select",
      dynamicOptions: {
        endpoint: "https://jsonplaceholder.typicode.com/albums",
        transformResponse: (res: any) => {
          try {
            return res.map((item: { title: string; id: string }) => ({
              label: item.title,
              value: item.id,
            }));
          } catch (err) {
            return [];
          }
        },
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
        transformResponse: (res: any) =>
          res.map((item: { title: string; id: string }) => ({
            label: item.title,
            value: item.id,
          })),
      },
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
    // Using `resultPath` to extract nested response:
    // {
    //   fieldId: "countries",
    //   label: "Country",
    //   type: "select",
    //   dynamicOptions: {
    //     endpoint: "https://restcountries.com/v3.1/all",
    //     transformResponse: (res: any) => {
    //       try {
    //         return res.map((item: any) => ({
    //           label: item.name.common,
    //           value: item.cca2,
    //         }));
    //       } catch (error) {
    //         // console.error("Error transforming response:", error);
    //         return [];
    //       }
    //     },
    //     fetchOnInit: true,
    //   },
    //   className:
    //     "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    //   labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    // },
    // Transform response into `string[]`:
    {
      fieldId: "products",
      label: "Products",
      type: "select",
      dynamicOptions: {
        endpoint: "https://fakestoreapi.com/products",
        transformResponse: (res: any) =>
          res.map((product: any) => product.title),
        fetchOnInit: true,
      },
      className:
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
      labelClassName: "block mb-2 text-sm font-medium text-gray-900",
    },
  ],
};

export default FormData;
