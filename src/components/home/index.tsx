import HomeLayout from "../layout/HomeLayout";
import "../global.css";

const page = () => {
  return (
    <HomeLayout>
      <main>
        <section className="px-4 md:px-0 py-12 md:pt-36 mt:pb-10">
          <div className="md:max-w-4xl lg:max-w-7xl text-center mx-auto w-11/12 mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto font-bold">
              Universal Micro Services
            </h1>
            <h2 className="text-md md:text-lg max-w-2xl mx-auto">
              Explore the cloud as serverless building blocks
            </h2>
            <div className="mt-10 md:flex items-center max-w-lg mx-auto">
              <a
                href="/explore"
                className="inline-flex items-center justify-center btn w-full text-center mb-4  md:w-auto md:mx-auto btn-primary"
              >
                Start for Free
              </a>
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  );
};

export default page;
