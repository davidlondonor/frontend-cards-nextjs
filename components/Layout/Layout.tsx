import { ReactNode } from "react";
import Footer from "../common/Footer";
import NavBar from "../common/NavBar";
import SearchBar from "../common/SearchBar";
import Search from "./Search";

interface ILayout {
  children?: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <main className="bg-grayBackground w-screen h-screen">
        <NavBar></NavBar>
        <SearchBar />
        <Search></Search>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
