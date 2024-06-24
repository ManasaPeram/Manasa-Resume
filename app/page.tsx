import FAQ from "@/components/FAQ";
import Angel from "@/components/angel";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Services from "@/components/services";
import Work from "@/components/work";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Angel/>
    <Services/>
    <Work/>
    <FAQ/>
    <Contact/>
   </main>
  );
}
