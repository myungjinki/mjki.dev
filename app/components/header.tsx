"use client";

import Image from "next/image";
import Link from "next/link";
import Modal from "./header-modal";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="">
      <nav className="flex items-center justify-between px-8 py-10">
        <Link href="/" className="name">
          mjki.dev
        </Link>
        <button
          className="flex items-center justify-center border-2 rounded-full h-14 w-14"
          onClick={() => setIsModalOpen(true)}
        >
          <Image src="/svg/menu.svg" alt="menu" width={24} height={24} />
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
