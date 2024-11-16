import Image from "next/image";
import Link from "next/link";
import { SNS } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="grid grid-cols-4 gap-4 px-8">
      <div className="h-40"></div>
      <div className="flex flex-col col-span-4 gap-4">
        <div className="name">Myungjin Ki</div>
        <div className="flex col-span-4 gap-4">
          <Link href={SNS.GITHUB} target="_blank">
            <Image className="dark:invert" src="/svg/github.svg" width={25} height={25} alt="github" />
          </Link>
          <Link href={SNS.LINKEDIN} target="_blank">
            <Image className="dark:invert" src="/svg/linkedin.svg" width={25} height={25} alt="linkedin" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col col-span-4 gap-1 my-8">
        <span>All rights reserved</span>
        <span>© Myungjin Ki 2024</span>
      </div>
    </footer>
  );
}
