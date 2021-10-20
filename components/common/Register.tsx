import Image from "next/image";
import { useState } from "react";

interface IRegister {
  closeModal?: true;
}

const Register = ({ closeModal }: IRegister) => {
  const [addInput, setAddInput] = useState(false);

  return (
    <div className="bg-blackModal w-screen h-screen flex justify-center items-center opacity-80">
      <div className="container flex h-hModal w-modalImage justify-between items-center bg-white mx-auto rounded-lg relative">
        <div className="bg-gray-400 z-50">
          <i
            className="bx bx-x text-2xl absolute text-gray-400 right-5 z-50 top-2"
            onClick={() => closeModal}
          />
        </div>
        <div className="w-imagenLogin h-hModal ">
          <Image
            src="/images/singin.png"
            width={450}
            height={437}
            layout="intrinsic"
            className="object-cover rounded"
          ></Image>
        </div>

        <div className="flex flex-col w-1/2 items-center mb-5">
          <h1 className="text-3xl font-bold">
            {addInput ? "Sign Up" : "Sign In"}
          </h1>
          <p className="text-xl mt-2 font-medium text-colorText">
            Simplify your reading in minutes.
          </p>
          <form action="" className="flex flex-col">
            <input
              type="Your email"
              className={`w-80 h-14 mb-3 border-2 border-gray2300 pl-6 rounded-xl text-xl bg-white font-bold text-colorText`}
              placeholder="Your email"
            />
            <input
              type="password"
              className=" w-80 h-14 border-2 border-gray-200 mb-3 pl-6 rounded-xl text-xl text-colorText bg-white font-bold"
              placeholder="Password"
            />
            {addInput ? (
              <input
                type="password"
                className=" w-80 h-14 border-2 border-gray-200 pl-6 rounded-xl text-xl text-colorText bg-white font-bold"
                placeholder="Full name"
              />
            ) : null}

            <p
              className="underline text-blue-600 text-base font-bold cursor-pointer"
              onClick={() => setAddInput(!addInput)}
            >
              {addInput ? `Sign In` : `Sign Up`}
            </p>
            <button
              placeholder="Sign In"
              className={` ${
                addInput ? "" : " mb-10 "
              } w-80 h-14 bg-primary mt-6 text-xl font-medium text-white rounded-xl`}
            >
              {addInput ? "Sign Up" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
