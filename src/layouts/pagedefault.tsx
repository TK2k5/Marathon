import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

const PageDefault = () => {
  return (
    <div className="flex flex-col min-h-screen gap-[20px]">
      <Header />
      <div className="flex ">
        <div className="flex-none w-auto border border-r-black h-screen">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Content />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PageDefault;
