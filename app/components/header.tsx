"use client";

import Image from "next/image";
import Modal from "./header-modal";
import { useState } from "react";
import { ThemeToggleButton } from "./theme-toggle-button";
import { AnimationLink } from "./animation-link";

export default function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<header className="">
			<nav className="flex items-center justify-between px-8 py-10">
				<AnimationLink href="/" className="name">
					mjki.dev
				</AnimationLink>
				<div className="items-center justify-end hidden w-1/2 gap-12 lg:flex">
					<AnimationLink href="/blog">Blog</AnimationLink>
					<AnimationLink href="/career">Career</AnimationLink>
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
