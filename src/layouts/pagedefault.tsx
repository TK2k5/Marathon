import Content from "./content";
import Footer from "./footer";
import Header from "./header";

const PageDefault = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default PageDefault;
