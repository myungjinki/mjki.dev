import Image from "next/image";

export default function HomeMain() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src="/images/profile-1.jpg" alt="profile" width={500} height={500} className="rounded-lg" />
      <p className="text-2xl">반갑습니다! 기명진입니다.</p>
    </div>
  );
}
