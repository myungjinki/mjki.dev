"use client"

import Image from "next/image"
import { useState } from "react"

import { ThemeToggleButton } from "@/components/common/Button/ThemeToggleButton"
import { AnimationLink } from "@/components/common/Link/AnimationLink"
import Modal from "@/components/common/Modal/HeaderModal"

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <header className="">
      <nav className="flex items-center justify-between px-8 py-10">
        <AnimationLink href="/" className="name">
          mjki.dev
        </AnimationLink>
        <div className="hidden w-1/2 items-center justify-end gap-12 lg:flex">
          <AnimationLink href="/blog">Blog</AnimationLink>
          <AnimationLink href="/lectures">Lectures</AnimationLink>
          <AnimationLink href="/careers">Career</AnimationLink>
          <ThemeToggleButton />
        </div>
        <button
          className="flex size-14 items-center justify-center rounded-full border-2 lg:hidden"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            className="dark:invert"
            src="/svg/menu.svg"
            alt="menu"
            width={24}
            height={24}
          />
        </button>
      </nav>
      <Modal
        className={`${isModalOpen || "hidden"}`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      ></Modal>
    </header>
  )
}
