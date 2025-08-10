import {
  useFormActions,
  useFormErrors,
  useFormMeta,
  useFormReg,
  useFormValue,
  useFormValues,
  validationEngine,
  type ValidationResponseType,
} from "../../react-forminate/src";
import "./App.css";
import CustomValidation from "./components/samples/CustomValidation";
import { formDataWithPropsFunctions } from "./components/samples/FormWithPropFunctions";
import NewForm from "./components/samples/NewForm";

class IbanValidationStrategy {
  validate(value: string): ValidationResponseType {
    // Simple IBAN regex validation (basic format check)
    const ibanRegex = /^[A-Z]{2}\d{16}[A-Z0-9]{1,30}$/;

    const isFormatValid = ibanRegex.test(value);

    return {
      isValid: isFormatValid,
      message: isFormatValid ? "" : "Invalid IBAN format",
    };
  }
}

let renderCount = 0;

const App = () => {
  renderCount++;
  validationEngine.registerStrategy("IBAN", new IbanValidationStrategy());

  // const formsContext = useFormReg();
  // const newForm1_fullName_value = useFormValue("fullName", "newForm1");
  // const newForm1_values = useFormValues("newForm1");
  // const { formSchema } = useFormMeta("newForm1");
  // const actions = useFormActions("newForm1");

  // const onShowRegisteredForms = () => {
  //   console.log("---- All_formsContext --->", formsContext);
  //   console.log("---- newForm1_values --->", newForm1_values);
  //   console.log("---- newForm1_fullName_value --->", newForm1_fullName_value);
  //   if (actions.validateForm) {
  //     actions.validateForm(formSchema);
  //   }
  // };
  return (
    <div className="">
      <section className="max-w-lg mx-auto my-8 text-gray-200">
        Render Count: {renderCount}
      </section>
      {/* <FormRegistryProvider> */}
      {/* <GithubSignup /> */}

      {/* <h1 className="text-3xl font-bold underline text-slate-500">
        React Forminate examples!
      </h1> */}
      {/* <div className="mb-8">
        <SimpleForm />
      </div> */}
      {/* <div className="mb-8">
        <CustomSubmit />
      </div> */}
      {/* <div className="mb-8">
        <FormWithCustomSkeletonLoading />
      </div> */}
      {/* <div className="mb-8">
        <ValidationPattern />
      </div> */}
      {/* <div className="mb-8">
        <Visibility />
      </div> */}
      {/* <div className="mb-8">
        <ContainerForm />
      </div> */}
      {/* <div className="mb-8">
        <ComplexForm />
      </div> */}
      {/* <div className="mb-8">
        <ApiDrivenForm />
      </div> */}
      {/* <div className="mb-8">
        <DataGridView />
      </div> */}
      {/* <div className="mb-8">
        <GridBasedLayout />
      </div> */}

      {/* <section className="max-w-lg mx-auto my-8">
        <SimpleForm />
      </section> */}
      {/* <section className="max-w-lg mx-auto my-8">
        <AdvancedGroupAndAPIForm />
      </section> */}

      {/* <section className="max-w-lg mx-auto my-8">
        <FormWithPropFunctions />
      </section> */}

      {/* <section className="max-w-lg mx-auto my-8">
        <CustomFieldRegister />
      </section> */}

      {/* <section className="max-w-lg mx-auto my-8">
        <CustomSubmitExample />
      </section> */}

      {/* <section className="max-w-xl mx-auto my-8">
        <ProductFeedback />
      </section> */}

      {/* <CompleteRegistrationForm /> */}

      {/* <div className="min-h-screen bg-gray-50 p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            <div className="space-y-8">
              <h2 className="font-bold text-2xl border-b-2 border-slate-300 text-slate-500">
                Formik
              </h2>
              <ReactFormik />
            </div>
            <div className="space-y-8">
              <h2 className="font-bold text-2xl border-b-2 border-slate-300 text-slate-500">
                React-Forminate
              </h2>
              <ReactForminateForm />
            </div>
            <div className="space-y-8">
              <h2 className="font-bold text-2xl border-b-2 border-slate-300 text-slate-500">
                React-Hook-Form
              </h2>
              <ReactHookForm />
            </div>
          </div>
        </div>
      </div> */}

      {/* <section className="max-w-xl mx-auto my-8">
        <NewValidationFormats />
      </section> */}

      {/* <section className="max-w-lg mx-auto my-8">
        <GroupForm />
      </section> */}

      {/* <section className="max-w-lg mx-auto my-8">
        <CustomSubmit2 />
      </section> */}
      {/* </FormRegistryProvider> */}

      {/* <section className="max-w-lg mx-auto my-8">
        <button
          onClick={onShowRegisteredForms}
          className="bg-amber-600 text-amber-50 px-4 py-2 rounded-lg"
        >
          Show Registered Forms
        </button>
      </section> */}

      {/* <section className="max-w-xl mx-auto my-8">
        <MultiSelect />
      </section> */}
      {/* <section className="lg:max-w-xl md:max-w-md max-w-sm mx-auto my-8">
        <NewForm />
      </section> */}
      <section className="lg:max-w-xl md:max-w-md max-w-sm mx-auto my-8">
        <CustomValidation />
      </section>
    </div>
  );
};

export default App;
