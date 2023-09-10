import Navbar from "../components/Navbar.c";
import Footer from "../components/Footer.c";

const Private = ({ Comp }: any) => {
  return (
    <>
      <Navbar />
      <main>
        <>{Comp ? <Comp /> : <h1>Private</h1>}</>
      </main>
      <Footer />
    </>
  );
};
export default Private;
