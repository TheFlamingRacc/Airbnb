import { PropsWithChildren } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header withNavigation={true} />
      {children}
      <Footer />
    </>
  );
}
