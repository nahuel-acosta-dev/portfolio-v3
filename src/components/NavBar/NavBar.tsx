"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            className="h-8 w-auto"
            width={60}
            height={60}
          />
        </Link>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

        <ul
          className={`md:flex md:items-center md:gap-10 ${
            open ? "mt-4 flex flex-col gap-6" : "hidden"
          }`}
        >
          <li>
            <a href="#hero" className="transition hover:text-accent">
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" className="transition hover:text-accent">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-accent">
              Contact
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="border-b-2 border-accent pb-1 font-semibold"
            >
              Let’s talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
