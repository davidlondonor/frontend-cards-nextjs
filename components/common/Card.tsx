import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Card = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
        <link rel="icon" href="/subtract.svg" />
      </Head>
      <Link href="/articles-details">
        <a>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-lg flex justify-center flex-col w-wCard relative w-96 h-hCard md:w-80">
            <span className="text-white bg-purple-400 w-20 rounded-xl p-1 font-bold absolute left-5 bottom-96 z-10 md:text-sm md:left-4">
              $49/MO
            </span>
            <i className="bx bxs-star text-4xl absolute text-yellow-500 left-72 bottom-96 pl-6 z-10 md:text-xl md:left-64" />
            <Image
              className="flex items-center justify-center object-cover"
              src="/images/imagen.jpg"
              width={100}
              height={300}
              alt="Palma de Cera, arbol colombiano"
            ></Image>
            <div className="px-6 py-4 bg-white">
              <div className="font-bold text-xl mb-2 ">
                Keeping the dream alive by traveling the world.{" "}
              </div>
              <p className="text-gray-700 text-base">
                Integrate the latest technologies with an innovative platform...
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between bg-white ">
              <div className="flex items-center justify-center">
                <Image src="/images/ellipse.png" width={25} height={25}></Image>
                <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  ALIVE COOPER
                </span>
              </div>
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                MAY 02
              </span>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Card;
