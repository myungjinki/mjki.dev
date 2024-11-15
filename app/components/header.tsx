import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-8 py-10">
      <Link href="/" className="name">
        mjki.dev
      </Link>
      <button className="flex items-center justify-center border-2 rounded-full h-14 w-14">
        <Image src="/svg/menu.svg" alt="menu" width={24} height={24} />
      </button>
    </nav>
  );
}
