"use client";

import Button from "../ui/Button";
import Image from "next/image";
import favicon from "../../image/freedom.gif";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-black/[.08] bg-background/80 backdrop-blur dark:border-white/[.145]">

      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">

        {/* logo */}
        <a href="#top" className="font-semibold tracking-tight">
          <Image src={favicon} alt="favicon" className="h-13 w-13 border-1 border-black-500 rounded-full" />
        </a>

        {/* desktop menu */}
        <nav className="hidden sm:flex items-center gap-1">
          <Button href="/" variant="ghost">Home</Button>
          <Button href="/#about" variant="ghost">About</Button>
          <Button href="/#skills" variant="ghost">Skills</Button>
          <Button href="/#projects" variant="ghost">Projects</Button>
          <Button href="/#certifications" variant="ghost">Certs</Button>
          <Button href="/contact" variant="secondary">Contact</Button>
        </nav>

        {/* mobile button */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="sm:hidden flex flex-col gap-4 px-6 pb-4">
          <Button href="/" variant="ghost">Home</Button>
          <Button href="/#about" variant="ghost">About</Button>
          <Button href="/#skills" variant="ghost">Skills</Button>
          <Button href="/#projects" variant="ghost">Projects</Button>
          <Button href="/#certifications" variant="ghost">Certs</Button>
          <Button href="/contact" variant="secondary">Contact</Button>
        </div>
      )}

    </header>
  );
}