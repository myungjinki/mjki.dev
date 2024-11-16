"use client";

import Image from "next/image";
import Link from "next/link";
import Modal from "./header-modal";
import { useState } from "react";
import { ThemeToggleButton } from "./theme-toggle-button";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="">
      <nav className="flex items-center justify-between px-8 py-10">
        <Link href="/" className="name">
          mjki.dev
        </Link>
        <div className="items-center justify-end hidden w-1/2 gap-12 lg:flex">
          <Link href="/career">Career</Link>
          <ThemeToggleButton />
        </div>
        <button
          className="flex items-center justify-center border-2 rounded-full h-14 w-14 lg:hidden"
          onClick={() => setIsModalOpen(true)}
        >
          <Image className="dark:invert" src="/svg/menu.svg" alt="menu" width={24} height={24} />
        </button>
      </nav>
      <Modal
        className={`${isModalOpen || "hidden"}`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      ></Modal>
    </header>
  );
}
