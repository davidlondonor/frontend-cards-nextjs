import Image from "next/image";

// Este componente no se usa

const ModalPopUpLogin = () => {
  return (
    <div className="bg-blackModal w-screen h-screen flex justify-center items-center opacity-80">
      <div className="container flex h-hModal w-modalImage justify-between items-center bg-white mx-auto rounded-lg relative">
        <i className="bx bxs-star text-6xl absolute text-yellow-500 right-5 z-50 bg-red-400 top-10" />

        <div className="w-imagenLogin h-hModal ">
          <Image
            src="/images/singin.png"
            width={450}
            height={437}
            layout="intrinsic"
            className="object-cover rounded"
          ></Image>
        </div>

        <div className="flex flex-col w-1/2 items-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-xl mt-3 font-medium text-colorText">
            Simplify your reading in minutes.
          </p>
          <input
            type="Your email"
            className="h-14 w-80 h-14 mt-5 border-2 border-gray2300 pl-6 rounded-xl text-xl bg-white font-bold text-colorText"
            placeholder="Your email"
          />

          <input
            type="password"
            className="h-14 w-80 h-14 border-2 border-gray-200 mt-6 pl-6 rounded-xl text-xl text-colorText bg-white font-bold"
            placeholder="Full name"
          />
          <input
            type="password"
            className="h-14 w-80 h-14 border-2 border-gray-200 mt-6 pl-6 rounded-xl text-xl text-colorText bg-white font-bold"
            placeholder="Password"
          />
          <button
            placeholder="Sign In"
            className="h-14 w-80 h-14 bg-primary mt-6 text-xl font-medium text-white rounded-xl"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPopUpLogin;
