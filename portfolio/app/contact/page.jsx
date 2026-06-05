import Layout from "@/component/layout/Layout";
import Contact from "@/component/ sections/Contact";
import Navbar from "@/component/layout/Navbar"; 
import Footer from "@/component/layout/Footer"; 
export default function ContactPage() {
  return (
    <>
    <Navbar />
      <div className="min-h-screen py-24 flex flex-col justify-center">
        <div className="mx-auto flex w-full flex-1 flex-col gap-12 px-6 py-12">
			
        <Contact />
			</div>
      </div>
    <Footer />
    </>
  );
}
