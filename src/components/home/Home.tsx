import Image from "next/image"

export default function HomeMain() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src="/images/profile-1.jpg"
        alt="profile"
        width={500}
        height={500}
        className="rounded-lg"
      />
      <p className="text-2xl">{`Hello! I'm Myungjin Ki`}</p>
    </div>
  )
}
