import { DynamicForm } from "../../../react-forminate/src";
import { SimpleFormData } from "../data";

const CustomSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col space-y-4 mb-4">
      <div className="h-6 bg-indigo-400 rounded w-1/3"></div>
      <div className="h-6 bg-indigo-400 rounded w-full">Loading...</div>
    </div>
  );
};

const FormWithCustomSkeletonLoading = () => {
  return (
    <div className="max-w-md mx-auto my-8">
      <h1 className="text-2xl text-gray-200 mb-6 font-bold">
        Form with custom skeleton loading
      </h1>
      <hr />
      <div className="mb-6">
        <h3 className="mb-4 text-xl text-gray-300">
          Form with custom skeleton loading
        </h3>
        <DynamicForm
          formId={SimpleFormData.formId}
          formData={SimpleFormData}
          showSkeletonLoading={true}
          skeleton={<CustomSkeleton />}
        />
      </div>
      <div className="mb-6">
        <h3 className="mb-4 text-xl text-gray-300">
          Form with out skeleton loading
        </h3>
        <DynamicForm
          formId={SimpleFormData.formId}
          formData={SimpleFormData}
          showSkeletonLoading={false}
        />
      </div>
      <div className="mb-6">
        <h3 className="mb-4 text-xl text-gray-300">
          Form with default skeleton loading
        </h3>
        <DynamicForm formId={SimpleFormData.formId} formData={SimpleFormData} />
      </div>
    </div>
  );
};

export default FormWithCustomSkeletonLoading;
