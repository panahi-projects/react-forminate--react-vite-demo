// import CustomSubmit from "./components/CustomSubmit";
import CustomSubmit from "./components/CustomSubmit";
import FormWithCustomSkeletonLoading from "./components/FormWithCustomSkeletonLoading";
import SimpleForm from "./components/SimpleForm";

const App = () => {
  return (
    <div className="bg-gray-900 py-8">
      <h1 className="text-3xl font-bold underline text-slate-500">
        React Forminate examples!
      </h1>
      {/* <div className="mb-8">
        <SimpleForm />
      </div>
      <div className="mb-8">
        <CustomSubmit />
      </div> */}
      <div className="mb-8">
        <FormWithCustomSkeletonLoading />
      </div>
    </div>
  );
};

export default App;
