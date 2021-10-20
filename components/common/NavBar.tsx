import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import Register from "./Register";

const contentStyle = {
  width: "100%",
  padding: "0",
  background: "transparent",
  right: "30",
  left: "0",
  border: "none",
  margin: "0 auto",
};

const NavBar = () => {
  const [modalSignIn, setModalSignIn] = useState(false);
  const openModal = () => {
    setModalSignIn(true);
  };
  // const closeModal = () => {
  //   setModalSignIn(false);
  // };
  return (
    <nav className=" h-20 w-screen flex justify-between bg-white">
      <Link href="/">
        <a className="flex items-center ml-10">
          <Image src="/images/logo.png" height={50} width={160} />
        </a>
      </Link>
      <div className="flex text-xl font-extrabold p-6">
        <Link href="/articles">
          <a>
            <p className="mx-5 text-graySpecial hover:text-primary cursor-pointer">
              Articles
            </p>
          </a>
        </Link>
        {false ? (
          <Link href="/favorites">
            <a>
              <p className="mx-5 text-graySpecial hover:text-primary cursor-pointer">
                Favorites
              </p>
            </a>
          </Link>
        ) : (
          <p
            onClick={() => openModal()}
            className="mx-5 text-graySpecial hover:text-primary cursor-pointer"
          >
            Favorites
          </p>
        )}
      </div>
      <Popup
        open={modalSignIn}
        onClose={() => setModalSignIn(false)}
        contentStyle={contentStyle}
        nested
        modal
      >
        <Register closeModal />
      </Popup>
    </nav>
  );
};

export default NavBar;
