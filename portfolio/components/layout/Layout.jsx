import Footer from "./Footer";
import Navbar from "./Navbar";
import Cercle from "../ui/Cercle";

export default function Layout({ children }) {
  return (
    <div id="top" className="relative min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white">

      {/* NAVBAR (fixed properly here) */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <Cercle />

      {/* LEFT RAIL */}
      <div className="fixed left-0 top-0 h-full w-20 border-r border-white/10 z-40" />

      {/* RIGHT RAIL */}
      <div className="fixed right-0 top-0 h-full w-20 border-l border-white/10 z-40" />

      {/* MAIN CONTENT */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 pl-28 pr-28">
        {children}
      </main>

      {/* FOOTER */}
      <div className="relative z-10">
        <Footer />
      </div>

    </div>
  );
}