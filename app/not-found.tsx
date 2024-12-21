import Image from "next/image"

export default function NotFound() {
  return (
    <div className="flex justify-center dark:invert">
      <Image src="/svg/not-found.svg" alt="404" width={256} height={256} />
    </div>
  )
}
