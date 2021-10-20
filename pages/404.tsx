import Image from "next/image";
import Layout from "../components/Layout/Layout";

const Custom404 = () => {
  return (
    <>
      <Layout>
        <div className="flex items-center justify-center">
          <div className="w-4/5 h-auto mt-32 flex content-evenly justify-around">
            <div className=" w-1/3 mt-8 flex flex-col items-center">
              <h1 className="text-blackText font-bold text-5xl text-center pb-6">
                Uh oh.
              </h1>
              <p className="text-center font-semibold">
                We ran into an issue, but dont worry. <br /> Well take care of
                it for sure
              </p>
              <button className="h-16 text-lg font-bold text-white bg-blue-600 p-3 rounded-lg w-44  mt-8">
                Back to safety
              </button>
            </div>
            <Image
              src="/images/error.png"
              width={470}
              height={350}
              className="w-2/3"
            ></Image>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Custom404;
