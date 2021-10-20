import NavBar from "./common/NavBar";
import Footer from "./common/Footer";
import SocialMediaBar from "./common/SocialMediaBar";
import Image from "next/image";
import React from "react";

const ArticlesDetails = () => {
  return (
    <>
      <NavBar></NavBar>
      <article className="w-full h-screen bg-grayBackground">
        <div className="p-10 w-modalImage mx-auto flex flex-col items-center text-center justify-center">
          <h1 className="font-extrabold text-4xl w-7/12">
            Should I work remotely or will it put a strain on my long-term
            career?
          </h1>
          <p className="h-24 text-lg font-bold w-7/12 my-7 text-graySpecial">
            As part of our ongoing effort to enhance the traveler journey, we’re
            proud to partner with Portland International Airport (PDX) on the
            launch of a pilot program designed to shorten rider wait times at
            pickup.
          </p>
          <SocialMediaBar />
          <picture className="mt-20">
            <Image
              src="/images/picture.png"
              width={750}
              height={400}
              className="object-cover"
            ></Image>
          </picture>
          <figcaption className="text-sm text-colorText font-bold">
            This is a caption on this photo for reference
          </figcaption>

          <p className="mt-12 font-bold w-10/12 text-left">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
      </article>
      <Footer></Footer>
    </>
  );
};

export default ArticlesDetails;
