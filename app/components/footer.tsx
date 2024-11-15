import Image from "next/image";
import Link from "next/link";
import { SNS } from "../utils/constants";

export default function Footer() {
  return (
    <div className="grid grid-cols-4 gap-4 px-4">
      <div className="col-span-4 name">Myungjin Ki</div>
      <div className="col-span-4 flex gap-4">
        <Link href={SNS.GITHUB} target="_blank">
          <Image src="/svg/github.svg" width={25} height={25} alt="github" />
        </Link>
        <Link href={SNS.LINKEDIN} target="_blank">
          <Image src="/svg/linkedin.svg" width={25} height={25} alt="linkedin" />
        </Link>
      </div>
    </div>
  );
}
