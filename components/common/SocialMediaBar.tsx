import Head from "next/head";
import Image from "next/image";

const SocialMediaBar = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
        <link rel="icon" href="/subtract.svg" />
      </Head>
      <div className="flex mt-12 w-7/12 h-11 justify-between items-center">
        <div className="flex w-4/6">
          <Image
            src="/images/ellipse.png"
            width={30}
            height={30}
            className="object-cover"
          ></Image>
          <div className="flex flex-col">
            <h4 className="ml-4 text-base uppercase font-bold text-left">
              Alice Cooper
            </h4>
            <p className="ml-4 text-colorText text-xs font-bold">
              Published on May 20, 2019
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center opacity-70 w-1/4">
          <p className="font-bold text-colorText ml-5">Share</p>
          <i className="text-2xl text-colorText bx bxl-facebook-square ml-3" />
          <i className="text-2xl text-colorText bx bx bxl-instagram ml-3" />{" "}
          <i className="text-2xl text-colorText bx bxl-twitter ml-3" />
        </div>
      </div>
    </>
  );
};

export default SocialMediaBar;
