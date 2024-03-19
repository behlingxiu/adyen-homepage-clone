import First from "@components/First";
import Second from "@components/Second";
import NavBar from "@components/NavBar";
import Image from "next/image";
import Third from "@components/Third";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <NavBar />
      <First />
      <Second />
      <Third />
      <Contact />
      <Footer />
    </main>
  );
}
