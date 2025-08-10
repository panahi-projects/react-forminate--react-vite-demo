import { FormDataCollectionType } from "../../../react-forminate/src";

const FormData: FormDataCollectionType = {
  formId: "DataGridViewFromData",
  title: "Data GridView Example",
  fields: [
    {
      fieldId: "products",
      label: "Products",
      type: "gridview",
      dynamicOptions: {
        endpoint: "https://dummyjson.com/products",
        resultPath: "products",
        transformResponse: (res) =>
          res.map((item: any) => ({
            label: item.title,
            value: item.id,
            image: item.thumbnail,
            price: item.price,
          })),
        fetchOnInit: true,
        pagination: {
          limit: 4,
          pageMode: "skip",
          skipKey: "skip",
          limitKey: "limit",
          startPage: 1,
        },
      },
      className: "gap-3", // Tailwind or custom
      styles: { marginTop: "1rem" },
      itemsClassName: "hover:shadow-lg",
      itemsStyles: { backgroundColor: "#fff" },
      containerClassName: "mb-8",
    },
    {
      fieldId: "users",
      label: "Users",
      type: "gridview",
      dynamicOptions: {
        endpoint: "https://reqres.in/api/users",
        resultPath: "",
        transformResponse: (res) =>
          res?.data?.map((item: any) => ({
            label: item.email,
            value: item.id,
            image: item.avatar,
            name: `${item.first_name} ${item.last_name}`,
          })),
        fetchOnInit: true,
        pagination: {
          limit: 4,
          pageMode: "page",
          limitKey: "per_page",
          pageKey: "page",
          startPage: 1,
        },
      },
      className: "gap-3", // Tailwind or custom
      styles: { marginTop: "1rem" },
      itemsClassName: "hover:shadow-lg",
      itemsStyles: { backgroundColor: "#fff" },
      containerClassName: "mb-8",
    },
  ],
};

export default FormData;
