import GithubSignupForm from "./GithubSignupForm";

const GithubSignup = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
      <div className="h-full text-gray-50">
        <div className="relative bg-slate-950 h-full bg-[url('/images/github-signup/bg-darkest-medium@2x.webp')] bg-cover bg-bottom bg-no-repeat">
          <div
            className="absolute top-0 z-10 w-full h-full lg:bg-[url('/images/github-signup/tres-amigos@2x.webp')] bg-contain bg-bottom bg-no-repeat"
            style={{ backgroundSize: "600px auto" }}
          ></div>
          <div className="lg:hidden md:block absolute w-28 h-28 top-full left-1/2 -translate-1/2 -rotate-12">
            <img
              className="w-full"
              src="/images/github-signup/mona_glow@2x.webp"
            />
          </div>
          <div className="text-white p-6">
            <div className="py-14 xl:px-32 md:px-8 px-4 text-center space-y-4">
              <h1 className="text-3xl poppins-semibold text-left">
                <span className="text-4xl">C</span>reate your free account
              </h1>
              <p className="poppins-light text-left text-sm">
                Explore GitHub's core features for individuals and
                organizations.
              </p>
              <p className="poppins-semibold text-left text-sm">
                <span>See what's included</span>
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-chevron-down"
                >
                  <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-full">
        <div className="lg:text-right text-center lg:py-4 py-10 px-10 text-sm max-w-xl mx-auto">
          Already have an account ?{" "}
          <a href="#" className="inline-block px-2 underline">
            {" "}
            Sign in →
          </a>
        </div>
        <div className="text-gray-950 p-6 mx-auto max-w-lg pt-22 pb-14">
          <h1 className="mb-8 text-xl font-semibold text-gray-700">
            Sign up to GitHub
          </h1>
          <GithubSignupForm />
        </div>
      </div>
    </div>
  );
};

export default GithubSignup;
