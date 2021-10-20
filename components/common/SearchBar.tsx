import Head from "next/head";

const SearchBar = () => {
  return (
    <div className="container w-11/12 mx-auto">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
        <link rel="icon" href="/subtract.svg" />
      </Head>

      <div className="flex items-center justify-center h-16 pt-14 rounded-lg w-full max-w-lg min-w-sm relative mx-auto ">
        <input
          type="text"
          placeholder="Search"
          className=" h-16 w-full font-bold text-black rounded-lg w-wSearchBar pl-16 text-xl shadow-lg"
        />
        <i className="absolute left-4 bx bx-search text-4xl text-gray-500  z-10" />
        <button className="absolute right-4 text-xl font-bold text-white bg-blue-600 p-3 rounded-xl">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
