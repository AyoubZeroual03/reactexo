import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
export const HomeLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
